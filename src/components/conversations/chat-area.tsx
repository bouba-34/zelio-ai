"use client"
import React, {useState} from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Paperclip, MoreVertical, PhoneCall } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface Message {
    id: string
    content: string
    timestamp: string
    sender: "user" | "ai"
}

const messages: Message[] = [
    {
        id: "1",
        content: "Yes I want to speak to the manager! I don't like you!",
        timestamp: "1:24AM",
        sender: "user",
    },
    {
        id: "2",
        content:
            "I apologize if I have not met your expectations. This issue seems beyond my current capabilities. Let me connect you with a live support agent to assist you further.",
        timestamp: "1:25AM",
        sender: "ai",
    },
    {
        id: "3",
        content: "you are annoying me",
        timestamp: "1:26AM",
        sender: "user",
    },
]

const ChatArea = () => {
    const [newMessage, setNewMessage] = useState("")

    return (
        <div className="flex flex-col h-full bg-gradient-to-b from-gray-900/50 to-gray-800/50">
            <div className="flex items-center justify-between p-4 border-b border-gray-700/20 backdrop-blur-xl bg-gray-900/20">
                <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-[1px]">
                        <div className="h-full w-full rounded-full bg-gray-900 flex items-center justify-center">
                            <span className="text-white font-semibold">PT</span>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-white">Conversation</h2>
                        <p className="text-sm text-gray-400">with prodigiestesting@gmail.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-700/50">
                        <PhoneCall className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-700/50">
                        <MoreVertical className="h-4 w-4" />
                    </Button>
                    <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white
                     shadow-lg shadow-blue-500/20 transition-all duration-300"
                    >
                        Transfer to Agent
                    </Button>
                </div>
            </div>

            <ScrollArea className="flex-1 p-4">
                <div className="space-y-4 max-w-3xl mx-auto">
                    <AnimatePresence>
                        {messages.map((message) => (
                            <motion.div
                                key={message.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className={cn("flex", message.sender === "user" ? "justify-end" : "justify-start")}
                            >
                                <div
                                    className={cn(
                                        "max-w-[80%] rounded-2xl px-4 py-2 shadow-lg transition-all duration-300",
                                        message.sender === "user"
                                            ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-blue-500/20"
                                            : "bg-gray-800/50 text-gray-200 shadow-gray-900/20 backdrop-blur-sm",
                                    )}
                                >
                                    <p className="text-sm leading-relaxed">{message.content}</p>
                                    <p className="text-xs mt-1 opacity-70 tabular-nums">{message.timestamp}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </ScrollArea>

            <div className="p-4 border-t border-gray-700/20 backdrop-blur-xl bg-gray-900/20">
                <div className="max-w-3xl mx-auto flex gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 text-gray-400 border-gray-700 hover:bg-gray-700/50 hover:text-white
                     transition-all duration-300"
                    >
                        <Paperclip className="h-4 w-4" />
                    </Button>
                    <Input
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="bg-gray-800/50 border-gray-700/20 text-white placeholder:text-gray-400
                     focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    />
                    <Button
                        className="shrink-0 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600
                     text-white shadow-lg shadow-blue-500/20 transition-all duration-300"
                    >
                        <Send className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default ChatArea
