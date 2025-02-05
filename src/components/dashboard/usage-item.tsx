import React from 'react'
import { Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

type Props = {
    label: string
    current: number
    max: number
    info?: string
}

const UsageItem = ({ label, current, max, info }: Props) => {

    const percentage = (current / max) * 100


    return (
        <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                    <span className="text-gray-100">{label}</span>
                    {info && (
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Info className="size-4 text-blue-300" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{info}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    )}
                </div>
                <span className="text-gray-200">
          {current.toLocaleString()} / {max.toLocaleString()}
        </span>
            </div>
            <div className="relative h-2 overflow-hidden rounded-full bg-indigo-950/50">
                <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500 ease-in-out"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    )
}
export default UsageItem
