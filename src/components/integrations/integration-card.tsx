"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface IntegrationCardProps {
    name: string
    description: string
    icon: string
    connections: {
        [key in 'stripe']: boolean
    }
    onClick: () => void
}

export function IntegrationCard({ name, description, icon, connections, onClick }: IntegrationCardProps) {
    return (
        <Card
            onClick={onClick}
            className={cn(
                "group relative overflow-hidden transition-all hover:shadow-lg",
                "cursor-pointer bg-gray-800/50 border-gray-700/50",
                "hover:bg-gray-800/80",
            )}
        >
            <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-2">
                        <Image
                            src={"/images/" + icon}
                            alt={name}
                            width={48}
                            height={48}
                            className="h-full w-full object-contain bg-transparent"
                        />
                    </div>
                    {<Badge className={cn(
                        "flex items-center gap-1",
                        connections[name] ? "bg-gradient-to-br from-blue-500 to-purple-500" : "bg-gray-700",
                    )}>
                        {connections[name]  && <Check className="h-3 w-3" />}
                        {connections[name] ? 'connected' : 'connect'}
                    </Badge>}

                </div>
                <div className="mt-4 space-y-2">
                    <h3 className="font-semibold tracking-tight text-white">{name}</h3>
                    <p className="text-sm text-gray-400">{description}</p>
                </div>
                <div
                    className={cn(
                        "absolute inset-0 opacity-0 transition-opacity",
                        "group-hover:bg-gradient-to-br group-hover:from-blue-600/10 group-hover:to-purple-600/10",
                        "group-hover:opacity-100",
                    )}
                />
            </CardContent>
        </Card>
    )
}

