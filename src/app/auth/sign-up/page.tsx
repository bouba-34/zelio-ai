import React from 'react'
import SignUpFormProvider from "@/components/forms/sign-up/form-provider";
import RegistrationFormStep from "@/components/forms/sign-up/registration-step";
import ButtonHandler from "@/components/forms/sign-up/button-handlers";
import HighLightBar from "@/components/forms/sign-up/highlight-bar";



const SignUp = async () => {
    return (
        <>
            <SignUpFormProvider>
                <HighLightBar/>
                <RegistrationFormStep/>
                <ButtonHandler/>
            </SignUpFormProvider>
        </>
    )
}

export default SignUp
