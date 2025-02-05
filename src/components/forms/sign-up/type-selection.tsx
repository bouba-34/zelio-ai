import React from 'react'
import {FieldValues, UseFormRegister} from "react-hook-form";
import {Sparkles} from "lucide-react";
import UserTypeCard from "@/components/forms/sign-up/user-type-card";

type Props = {
    register: UseFormRegister<FieldValues>
    userType: 'owner' | 'student'
    setUserType: React.Dispatch<React.SetStateAction<'owner' | 'student'>>
}

const TypeSelectionForm = ({ register, setUserType, userType }: Props) => {
    return (
        <>
            <div className="inline-flex items-center gap-2 text-teal-400 bg-teal-950/30 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">AI-Powered Sales Assistant</span>
            </div>
            <div className="space-y-2">
                <h1 className="text-4xl font-bold text-white">Create your account</h1>
                <p className="text-slate-400">
                    Tell us about yourself! We'll personalize your experience based on your needs.
                </p>
                <div className="grid gap-4">
                    <UserTypeCard
                        register={register}
                        setUserType={setUserType}
                        userType={userType}
                        value="owner"
                        title="Business Owner"
                        text="I own a business and want to increase my sales"/>
                    <UserTypeCard
                        register={register}
                        setUserType={setUserType}
                        userType={userType}
                        value="student"
                        title="Student"
                        text="I am a student and want to learn more about sales"/>
                </div>
                </div>
        </>
    )
}
export default TypeSelectionForm
