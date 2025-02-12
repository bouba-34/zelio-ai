"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const themes = [
    {
        id: "light",
        preview: "/placeholder.svg?height=120&width=200",
    },
    {
        id: "default",
        preview: "/placeholder.svg?height=120&width=200",
    },
    {
        id: "dark",
        preview: "/placeholder.svg?height=120&width=200",
    },
]

export function ThemeSelector() {
    const [selectedTheme, setSelectedTheme] = useState("default")

    return (
        <Card className="border-gray-700/20 bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-xl">
            <CardHeader>
                <CardTitle className="text-xl font-semibold text-white flex items-center gap-2">
                    <Palette className="h-5 w-5 text-blue-400" />
                    Interface Theme
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-3 gap-4">
                    {themes.map((theme) => (
                        <motion.button
                            key={theme.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelectedTheme(theme.id)}
                            className={cn(
                                "relative rounded-xl overflow-hidden group transition-all duration-300",
                                selectedTheme === theme.id && "ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-900",
                            )}
                        >
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-0
                            group-hover:opacity-100 transition-opacity duration-300"
                            />
                            <img
                                src={theme.preview || "/placeholder.svg"}
                                alt={`${theme.id} theme preview`}
                                className="w-full h-auto rounded-lg border border-gray-700/20"
                            />
                            <div className="absolute top-2 left-2 flex gap-1.5">
                                <div className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                                <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
                            </div>
                        </motion.button>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

