"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Paperclip, Send, Smile, MoreVertical, Phone, Bot, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { TypingIndicator } from "@/components/chatbot/typing-indicator"
import { FAQSection } from "@/components/chatbot/faq-section"

interface Message {
    id: string
    content: string
    timestamp: string
    sender: "user" | "bot"
    status?: "sending" | "sent" | "delivered" | "read"
}

// Bot responses based on keywords
const botResponses: Record<string, string[]> = {
    default: [
        "I'd be happy to help you with that. Could you provide more details?",
        "Thanks for reaching out! Let me assist you with your query.",
        "I understand. Let me help you with that.",
    ],
    hello: [
        "Hi there! How can I assist you today?",
        "Hello! What can I help you with?",
        "Hey! How may I help you today?",
    ],
    pricing: [
        "Our pricing plans start at $49/month for the basic package. Would you like me to share more details?",
        "I'd be happy to explain our pricing structure. We have several plans tailored to different needs.",
    ],
    help: [
        "I'm here to help! What specific assistance do you need?",
        "I'll be glad to help you. What seems to be the issue?",
    ],
}

export default function ChatInterface() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            content: "Hey there, have a question? Text us here",
            timestamp: "1:24 pm",
            sender: "bot",
            status: "read",
        },
    ])
    const [newMessage, setNewMessage] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const [activeTab, setActiveTab] = useState("chat")
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages, messagesEndRef, scrollToBottom]) // Added messagesEndRef to dependencies

    const getBotResponse = (message: string): string => {
        const lowercaseMsg = message.toLowerCase()

        // Check for keyword matches
        for (const [keyword, responses] of Object.entries(botResponses)) {
            if (lowercaseMsg.includes(keyword)) {
                return responses[Math.floor(Math.random() * responses.length)]
            }
        }

        // Return default response if no keywords match
        const defaultResponses = botResponses.default
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
    }

    const simulateBotResponse = () => {
        setIsTyping(true)

        // Random response time between 1 and 3 seconds
        const responseTime = Math.random() * 2000 + 1000

        setTimeout(() => {
            setIsTyping(false)

            const botMessage: Message = {
                id: Date.now().toString(),
                content: getBotResponse(newMessage),
                timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                sender: "bot",
                status: "read",
            }

            setMessages((prev) => [...prev, botMessage])
        }, responseTime)
    }

    const sendMessage = () => {
        if (!newMessage.trim()) return

        const message: Message = {
            id: Date.now().toString(),
            content: newMessage,
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            sender: "user",
            status: "sending",
        }

        setMessages((prev) => [...prev, message])
        setNewMessage("")

        // Simulate message states
        setTimeout(() => {
            setMessages((prev) => prev.map((msg) => (msg.id === message.id ? { ...msg, status: "sent" as const } : msg)))
        }, 500)

        setTimeout(() => {
            setMessages((prev) => prev.map((msg) => (msg.id === message.id ? { ...msg, status: "delivered" as const } : msg)))
            simulateBotResponse()
        }, 1000)
    }

    return (
        <div className="w-full max-w-md mx-auto h-[600px] rounded-xl overflow-hidden border border-gray-800">
            <div className="flex flex-col h-full bg-gradient-to-b from-gray-900 to-gray-800">
                {/* Header */}
                <div className="sticky top-0 z-20 p-4 border-b border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <Avatar className="h-10 w-10 border-2 border-blue-500/20">
                                    <AvatarImage src="https://v0.dev/placeholder.svg?height=40&width=40" />
                                    <AvatarFallback>WP</AvatarFallback>
                                </Avatar>
                                <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-gray-900" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <h2 className="text-sm font-semibold text-white">Sales Rep - Web Prodigies</h2>
                                    <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                                        Online
                                    </Badge>
                                </div>
                                <p className="text-xs text-gray-400">Typically replies in a few minutes</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                                <Phone className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                                <MoreVertical className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    <div className="mt-4">
                        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                            <TabsList className="bg-gray-800/50 border border-gray-700/50">
                                <TabsTrigger
                                    value="chat"
                                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/20
                           data-[state=active]:to-purple-500/20 data-[state=active]:text-white flex items-center gap-2"
                                >
                                    <Bot className="h-4 w-4" />
                                    Chat
                                </TabsTrigger>
                                <TabsTrigger
                                    value="helpdesk"
                                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/20
                           data-[state=active]:to-purple-500/20 data-[state=active]:text-white flex items-center gap-2"
                                >
                                    <HelpCircle className="h-4 w-4" />
                                    Helpdesk
                                </TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {activeTab === "chat" ? (
                        <motion.div
                            key="chat"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="flex flex-col flex-1 min-h-0" // Add min-h-0 to ensure proper scrolling
                        >
                            {/* Messages */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
                                <AnimatePresence initial={false}>
                                    {messages.map((message) => (
                                        <motion.div
                                            key={message.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            className={cn("flex", message.sender === "user" ? "justify-end" : "justify-start")}
                                        >
                                            <div className="flex items-start gap-2 max-w-[80%]">
                                                {message.sender === "bot" && (
                                                    <Avatar className="h-8 w-8 border border-gray-800">
                                                        <AvatarImage src="https://v0.dev/placeholder.svg?height=32&width=32" />
                                                        <AvatarFallback>WP</AvatarFallback>
                                                    </Avatar>
                                                )}
                                                <div>
                                                    <div
                                                        className={cn(
                                                            "rounded-2xl px-4 py-2 text-sm",
                                                            message.sender === "user"
                                                                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                                                                : "bg-gray-800 text-gray-100",
                                                        )}
                                                    >
                                                        {message.content}
                                                    </div>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <span className="text-xs text-gray-500">{message.timestamp}</span>
                                                        {message.sender === "user" && message.status && (
                                                            <span className="text-xs text-gray-500">
                                {message.status === "sending" && "Sending..."}
                                                                {message.status === "sent" && "Sent"}
                                                                {message.status === "delivered" && "Delivered"}
                                                                {message.status === "read" && "Read"}
                              </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>

                                {/* Typing Indicator */}
                                <AnimatePresence>
                                    {isTyping && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            className="flex items-start gap-2"
                                        >
                                            <Avatar className="h-8 w-8 border border-gray-800">
                                                <AvatarImage src="https://v0.dev/placeholder.svg?height=32&width=32" />
                                                <AvatarFallback>WP</AvatarFallback>
                                            </Avatar>
                                            <TypingIndicator />
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input */}
                            <div className="sticky bottom-0 p-4 border-t border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800">
                                <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                                        <Paperclip className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                                        <Smile className="h-4 w-4" />
                                    </Button>
                                    <Input
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        placeholder="Type your message..."
                                        className="flex-1 bg-gray-800/50 border-gray-700/50 text-white placeholder:text-gray-500
                             focus:ring-2 focus:ring-blue-500/20"
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" && !e.shiftKey) {
                                                e.preventDefault()
                                                sendMessage()
                                            }
                                        }}
                                    />
                                    <Button
                                        onClick={sendMessage}
                                        disabled={!newMessage.trim()}
                                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700
                             hover:to-purple-700 text-white"
                                    >
                                        <Send className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="helpdesk"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex-1 overflow-y-auto scrollbar-hide"
                        >
                            <FAQSection />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

