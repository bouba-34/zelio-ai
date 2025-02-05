import React from 'react'
import {Sparkles} from "lucide-react";
import OTPInput from "./otp-input";

type Props = {
    setOTP: React.Dispatch<React.SetStateAction<string>>
    onOTP: string
}

const OTPForm = ({ onOTP, setOTP }: Props) => {
    return (
        <>
            <div className="inline-flex items-center gap-2 text-teal-400 bg-teal-950/30 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Verify Your Email</span>
            </div>
            <div className="space-y-2">
                <h1 className="text-4xl font-bold text-white">Enter OTP</h1>
                <p className="text-slate-400">Enter the one-time password that was sent to your email.</p>
            </div>
            <div className="w-full justify-center flex py-5">
                <OTPInput
                    otp={onOTP}
                    setOtp={setOTP}
                />
            </div>
        </>
    )
}
export default OTPForm
