import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type Props = {
    title: string
    value: string | number
    icon: React.ComponentType<{ className?: string }>
    trend?: {
        value: number
        isPositive: boolean
    }
}

const MetricsCard = ({ title, value, icon: Icon, trend }: Props) => {
    return (
        <Card className="relative overflow-hidden border-gray-700/20 bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-lg">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
            <CardContent className="p-6">
                <div className="flex items-center justify-between">
                    <div className="size-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 p-[1px]">
                        <div className="size-full rounded-xl bg-blue-950 flex items-center justify-center">
                            <Icon className="size-6 text-blue-300" />
                        </div>
                    </div>
                    {trend && (
                        <div className={cn("text-sm font-medium", trend.isPositive ? "text-emerald-400" : "text-rose-400")}>
                            {trend.isPositive ? "+" : "-"}
                            {trend.value}%
                        </div>
                    )}
                </div>
                <div className="mt-4">
                    <p className="text-sm font-medium text-gray-300">{title}</p>
                    <p className="mt-2 text-3xl font-bold text-white">{value}</p>
                </div>
            </CardContent>
        </Card>
    )
}
export default MetricsCard
