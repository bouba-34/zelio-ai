'use client'
import {useToast} from "@/hooks/use-toast";
import {useState} from "react";
import {useSignUp} from "@clerk/nextjs";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import {UserRegistrationProps, UserRegistrationSchema} from "@/schemas/auth.schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {router} from "next/client";
import {onCompleteUserRegistration} from "@/actions/auth";

export const useSignUpForm = () => {
    const { toast } = useToast()
    const [loading, setLoading] = useState<boolean>(false)
    const { signUp, isLoaded, setActive} = useSignUp()
    const rooter = useRouter()
    const methods = useForm<UserRegistrationProps>({
        resolver: zodResolver(UserRegistrationSchema),
        type: 'owner',
        mode: 'onChange',

    })

    const onGenerateOTP = async (
        email: string,
        password: string,
        onNext: React.Dispatch<React.SetStateAction<number>>
    ) => {
        if (!isLoaded) return

        try {
            if ("create" in signUp) {
                await signUp.create({
                    emailAddress: email,
                    password: password,
                })
            }

            if ("prepareEmailAddressVerification" in signUp) {
                await signUp.prepareEmailAddressVerification({strategy: 'email_code'})
            }

            //console.log('OTP generated')

            onNext((prev) => prev + 1)
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.errors[0].longMessage,
            })
        }
    }

    const onHandleSubmit = methods.handleSubmit(
        async (values: UserRegistrationProps) => {
            if (!isLoaded) return

            try {
                setLoading(true)
                if ("attemptEmailAddressVerification" in signUp) {
                    const completeSignUp = await signUp.attemptEmailAddressVerification({
                        code: values.otp,
                    })

                    if (completeSignUp.status !== 'complete') {
                        return { message: 'Something went wrong!' }
                    }

                    if (completeSignUp.status == 'complete') {
                        if (!signUp.createdUserId) return

                        const registered = await onCompleteUserRegistration(
                            values.fullname,
                            signUp.createdUserId,
                            values.type
                        )

                        if (registered?.status == 200 && registered.user) {
                            if (setActive) {
                                await setActive({
                                    session: completeSignUp.createdSessionId,
                                })
                            }

                            setLoading(false)
                            await router.push('/dashboard')
                        }

                        if (registered?.status == 400) {
                            toast({
                                title: 'Error',
                                description: 'Something went wrong!',
                            })
                        }
                    }
                }

            } catch (error: any) {
                if (error.errors && error.errors.length > 0) {
                    toast({
                        title: 'Error',
                        description: error.errors[0].longMessage,
                    });
                } else {
                    toast({
                        title: 'Error',
                        description: 'An unknown error occurred.',
                    });
                }
            }
        }
    )
    return {
        methods,
        onHandleSubmit,
        onGenerateOTP,
        loading,
    }
}

