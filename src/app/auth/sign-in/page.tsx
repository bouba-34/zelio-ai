import React from 'react'
import SignInFormProvider from "@/components/forms/sign-in/form-provider";
import LoginForm from "@/components/forms/sign-in/login-form";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const SignPage = () => {
    return (
        <>
            <SignInFormProvider>
                <LoginForm />
                <div className="w-full flex flex-col gap-3 items-center">
                    <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white"
                    >
                        Submit
                    </Button>
                    <p className="text-center text-slate-400">
                        Don’t have an account?{' '}
                        <Link href="/auth/sign-up" className="text-teal-400 hover:text-teal-300 font-medium">
                            Create one
                        </Link>
                    </p>
                </div>
            </SignInFormProvider>
        </>
    )
}
export default SignPage
