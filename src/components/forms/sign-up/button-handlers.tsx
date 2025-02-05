"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { useAuthContextHook } from '@/context/use-auth-context'
import { useFormContext } from 'react-hook-form'
import Link from "next/link";
import {useSignUpForm} from "@/hooks/sign-up/use-sign-up";

const ButtonHandlers = () => {

    const { setCurrentStep, currentStep } = useAuthContextHook()
    const { formState, getFieldState, getValues } = useFormContext()
    const { onGenerateOTP } = useSignUpForm()

    const { isDirty: isName } = getFieldState('fullname', formState)
    const { isDirty: isEmail } = getFieldState('email', formState)
    const { isDirty: isPassword } = getFieldState('password', formState)


    if (currentStep === 3) {
        return (
            <div className="w-full flex flex-col gap-3 items-center">
                <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white"
                >
                    Create an account
                </Button>
                <p className="text-center text-slate-400">
                    Already have an account?{" "}
                    <Link href="/auth/sign-in" className="text-teal-400 hover:text-teal-300 font-medium">
                        Sign In
                    </Link>
                </p>
            </div>
        )
    }

    if (currentStep === 2) {
        return (
            <div className="w-full flex flex-col gap-3 items-center">
                <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white"

                    {...(isName &&
                        isEmail &&
                        isPassword && {
                            onClick: () => {
                                console.log("on go to step 3")
                                onGenerateOTP(
                                    getValues('email'),
                                    getValues('password'),
                                    setCurrentStep
                                )
                            }
                        })}
                >
                    Continue
                </Button>
                <p className="text-center text-slate-400">
                    Already have an account?{" "}
                    <Link href="/auth/sign-in" className="text-teal-400 hover:text-teal-300 font-medium">
                        Sign In
                    </Link>
                </p>
            </div>
        )
    }

    return (
        <div className="w-full flex flex-col gap-3 items-center">
            <Button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white"
                onClick={() => setCurrentStep((prev: number) => prev + 1)}
            >
                Continue
            </Button>
            <p className="text-center text-slate-400">
                Already have an account?{" "}
                <Link href="/auth/sign-in" className="text-teal-400 hover:text-teal-300 font-medium">
                    Sign In
                </Link>
            </p>
        </div>
    )
}
export default ButtonHandlers
