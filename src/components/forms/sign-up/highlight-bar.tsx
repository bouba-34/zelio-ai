"use client"
import React from 'react'
import {useAuthContextHook} from "@/context/use-auth-context";



const HighlightBar = () => {

    const { currentStep } = useAuthContextHook()
    const totalSteps = 3


    return (
        <div className="w-full max-w-xs mx-auto mb-8">
            <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-teal-400">
          Step {currentStep}/{totalSteps}
        </span>
                <span className="text-sm text-slate-400">Account Setup</span>
            </div>
            <div className="h-1.5 w-full bg-slate-800/50 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
            </div>
        </div>
    )
}
export default HighlightBar
