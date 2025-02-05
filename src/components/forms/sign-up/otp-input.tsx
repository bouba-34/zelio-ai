import React from 'react'
import {InputOTP, InputOTPSlot} from "@/components/ui/input-otp";

type Props = {
    otp: string
    setOtp: React.Dispatch<React.SetStateAction<string>>
}

const OtpInput = ({otp, setOtp}: Props) => {
    return (
        <InputOTP
            maxLength={6}
            value={otp}
            onChange={(otp) => setOtp(otp)}
            className="text-center text-2xl bg-slate-800/50 border-slate-700 text-white focus:border-teal-500 focus:ring-teal-500/20"
        >
            <div className="flex gap-3">
                <div>
                    <InputOTPSlot index={0} />
                </div>
                <div>
                    <InputOTPSlot index={1} />
                </div>
                <div>
                    <InputOTPSlot index={2} />
                </div>
                <div>
                    <InputOTPSlot index={3} />
                </div>
                <div>
                    <InputOTPSlot index={4} />
                </div>
                <div>
                    <InputOTPSlot index={5} />
                </div>
            </div>
        </InputOTP>
    )
}
export default OtpInput
