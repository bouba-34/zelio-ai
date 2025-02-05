"use client"
import React from 'react'
import {useSignInForm} from "@/hooks/sign-in/use-sign-in";
import {FormProvider} from "react-hook-form";
import {Loader} from "@/components/loader";

type Props = {
    children: React.ReactNode
}

const SignInFormProvider = ({children}: Props) => {

    const { methods, onHandleSubmit, loading } = useSignInForm()


    return (
        <FormProvider {...methods}>
            <form
                onSubmit={onHandleSubmit}
            >
                <div className="flex flex-col justify-between gap-3 h-full">
                    <Loader loading={loading}>{children}</Loader>
                </div>
            </form>
        </FormProvider>
    )
}
export default SignInFormProvider
