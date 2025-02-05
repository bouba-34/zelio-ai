"use client"

import React from 'react'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, AlertTriangle, Circle } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const tabs = ["Unread", "All", "Expired", "Shared"] as const
type Tab = (typeof tabs)[number]

interface Conversation {
    id: string
    email: string
    message: string
    date: string
    isUnread?: boolean
    hasWarning?: boolean
    domain: string
}

const conversations: Conversation[] = [
    {
        id: "1",
        email: "prodigiestesting@gmail.com",
        message: "Hey! What's your nam...",
        date: "1:14AM",
        isUnread: true,
        hasWarning: true,
        domain: "webprodigies.com",
    },
    {
        id: "2",
        email: "prodigiestesting@gmail.com",
        message: "hi...",
        date: "1:23AM",
        isUnread: true,
        hasWarning: true,
        domain: "webprodigies.com",
    },
]


const ConversationList = () => {
    const [activeTab, setActiveTab] = useState<Tab>("All")
    const [selectedId, setSelectedId] = useState<string>("1")

    return (
        <div className="border-r border-gray-700/20 bg-gray-900/20">
            <div className="p-4 border-b border-gray-700/20 backdrop-blur-xl bg-gray-900/20">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                        placeholder="Search conversations..."
                        className="pl-9 bg-gray-800/50 border-gray-700/20 text-white placeholder:text-gray-400
                     focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    />
                </div>
            </div>
            <div className="border-b border-gray-700/20 bg-gray-900/20 backdrop-blur-xl">
                <div className="flex p-2 gap-2">
                    {tabs.map((tab) => (
                        <Button
                            key={tab}
                            variant="ghost"
                            size="sm"
                            className={cn(
                                "flex-1 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-300",
                                activeTab === tab &&
                                "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-white shadow-lg shadow-blue-500/10",
                            )}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </Button>
                    ))}
                </div>
            </div>
            <ScrollArea className="h-[calc(100vh-15rem)]">
                <div className="p-3 space-y-2">
                    {conversations.map((conversation) => (
                        <motion.button
                            key={conversation.id}
                            onClick={() => setSelectedId(conversation.id)}
                            className={cn(
                                "w-full text-left p-4 rounded-xl transition-all duration-300",
                                "hover:bg-gray-800/50 hover:shadow-lg hover:shadow-blue-500/5",
                                "relative overflow-hidden group",
                                selectedId === conversation.id &&
                                "bg-gradient-to-r from-blue-500/10 to-cyan-500/10 shadow-lg shadow-blue-500/10",
                            )}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {conversation.isUnread && (
                                <Circle className="absolute right-3 top-3 h-2 w-2 fill-blue-500 text-blue-500" />
                            )}
                            <div className="flex justify-between items-start mb-2">
                <span className="text-sm font-medium text-gray-200 truncate flex items-center gap-2">
                  {conversation.email}
                    {conversation.hasWarning && <AlertTriangle className="h-4 w-4 text-amber-400" />}
                </span>
                                <span className="text-xs text-gray-400 tabular-nums">{conversation.date}</span>
                            </div>
                            <p className="text-sm text-gray-400 truncate mb-2">{conversation.message}</p>
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-gray-700" />
                                <p className="text-xs text-gray-500">{conversation.domain}</p>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}
export default ConversationList
