"use client"
import React, {useState} from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ImagePlus, MessageSquare } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const ChatbotSettings = () => {
    const [chatPreview, setChatPreview] = useState({
        icon: "https://v0.dev/placeholder.svg?height=40&width=40",
        greeting: "Hey there! How can I help you today?",
        name: "Sales Rep - Damian A",
    })

    return (
        <div className="grid lg:grid-cols-2 gap-6">
            <div className="space-y-6">
                <Card className="border-0 bg-gradient-to-b from-gray-800/50 to-gray-900/50">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20" />
                    <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-xl">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="text-xl font-semibold text-white">Chatbot Appearance</CardTitle>
                            <Badge variant="premium" className="bg-gradient-to-r from-amber-500 to-orange-500">
                                Premium
                            </Badge>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label className="text-sm text-gray-400">Chatbot Icon</Label>
                                <div className="flex items-start gap-4">
                                    <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-[2px]">
                                        <div className="h-full w-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                                            <img
                                                src={chatPreview.icon || "/placeholder.svg"}
                                                alt="Chatbot icon"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <Button variant="outline" className="border-gray-700 text-gray-300 hover:text-white">
                                        <ImagePlus className="h-4 w-4 mr-2" />
                                        Upload Icon
                                    </Button>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="botName" className="text-sm text-gray-400">
                                    Bot Name
                                </Label>
                                <Input
                                    id="botName"
                                    value={chatPreview.name}
                                    onChange={(e) => setChatPreview({ ...chatPreview, name: e.target.value })}
                                    className="bg-gray-800/50 border-gray-700/20 text-white"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="greeting" className="text-sm text-gray-400">
                                    Greeting Message
                                </Label>
                                <Input
                                    id="greeting"
                                    value={chatPreview.greeting}
                                    onChange={(e) => setChatPreview({ ...chatPreview, greeting: e.target.value })}
                                    className="bg-gray-800/50 border-gray-700/20 text-white"
                                />
                            </div>
                        </CardContent>
                    </div>
                </Card>
            </div>

            <div className="lg:pl-6">
                <div className="sticky top-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Live Preview</h3>
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="rounded-2xl overflow-hidden border border-gray-700/50 bg-gradient-to-b
                       from-gray-800/50 to-gray-900/50 backdrop-blur-xl"
                        >
                            <div className="p-4 border-b border-gray-700/50 flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-[2px]">
                                    <div className="h-full w-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                                        <img
                                            src={chatPreview.icon || "/placeholder.svg"}
                                            alt="Chatbot icon"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-white">{chatPreview.name}</p>
                                    <p className="text-xs text-gray-400">Online</p>
                                </div>
                            </div>

                            <div className="h-[400px] p-4 space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-[2px]">
                                        <div className="h-full w-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                                            <img
                                                src={chatPreview.icon || "/placeholder.svg"}
                                                alt="Chatbot icon"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="bg-gray-800/50 rounded-2xl rounded-tl-none px-4 py-2 text-white text-sm">
                                        {chatPreview.greeting}
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 border-t border-gray-700/50">
                                <div className="flex gap-2">
                                    <Input placeholder="Type your message..." className="bg-gray-800/50 border-gray-700/20 text-white" />
                                    <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                                        <MessageSquare className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}
export default ChatbotSettings
