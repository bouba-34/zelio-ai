import { ChatBotMessageProps } from '@/schemas/conversation.schema'
import React, {forwardRef, useEffect, useRef, useState} from 'react'
import { UseFormRegister } from 'react-hook-form'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '../ui/tabs'
import Bubble from './bubble'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import {Bot, HelpCircle, MoreVertical, Paperclip, Phone, Send, Smile} from 'lucide-react'
import { Label } from '../ui/label'
import {Badge} from "@/components/ui/badge";
import {AnimatePresence, motion} from "framer-motion";
import {FAQSection} from "@/components/chatbot/faq-section";
import Responding from "@/components/chatbot/responding";

type Props = {
    errors: any
    register: UseFormRegister<ChatBotMessageProps>
    chats: { role: 'assistant' | 'user'; content: string; link?: string }[]
    onChat(): void
    onResponding: boolean
    domainName: string
    theme?: string | null
    textColor?: string | null
    help?: boolean
    realtimeMode:
        | {
        chatroom: string
        mode: boolean
    }
        | undefined
    helpdesk: {
        id: string
        question: string
        answer: string
        domainId: string | null
    }[]
    setChat: React.Dispatch<
        React.SetStateAction<
            {
                role: 'user' | 'assistant'
                content: string
                link?: string | undefined
            }[]
        >
    >
}

export const BotWindow = forwardRef<HTMLDivElement, Props>(
    (
        {
            errors,
            register,
            chats,
            onChat,
            onResponding,
            domainName,
            helpdesk,
            realtimeMode,
            setChat,
            textColor,
            theme,
            help,
        },
        ref
    ) => {
        //console.log(errors)

        //const [isTyping, setIsTyping] = useState(false)
        const [activeTab, setActiveTab] = useState("chat")
        //const messagesEndRef = useRef<HTMLDivElement>(null)

        /*const scrollToBottom = () => {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
        }*/

        /*useEffect(() => {
            scrollToBottom()
        }, [chats, messagesEndRef, scrollToBottom]) // Added messagesEndRef to dependencies*/

        return (
            <div className="w-full max-w-md mx-auto h-[600px] rounded-xl overflow-hidden border border-gray-800">
                <div className="flex flex-col h-full bg-gradient-to-b from-gray-900 to-gray-800">
                    {/* Header */}
                    <div className="sticky top-0 z-20 p-4 border-b border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <Avatar className="h-10 w-10 border-2 border-blue-500/20">
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-gray-900" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h2 className="text-sm font-semibold text-white">Sales Rep - <span className="text-sm">{domainName.split('.com')[0]}</span></h2>
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
                                        {chats.map((chat, key) => (
                                            <Bubble message={chat} key={key} />
                                        ))}
                                    </AnimatePresence>

                                    {/* Typing Indicator */}
                                    <AnimatePresence>
                                        {onResponding && <Responding/>}
                                    </AnimatePresence>

                                    <div ref={ref} />
                                </div>

                                {/* Input */}
                                <div className="sticky bottom-0 p-4 border-t border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800">
                                    <form onSubmit={onChat} className="flex items-center gap-2">
                                        <Label htmlFor="bot-image">
                                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                                            <Paperclip className="h-4 w-4" />
                                            <Input
                                                {...register('image')}
                                                type="file"
                                                id="bot-image"
                                                className="hidden"
                                            />
                                        </Button>
                                        </Label>
                                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                                            <Smile className="h-4 w-4" />
                                        </Button>
                                        <Input
                                            {...register('content')}
                                            placeholder="Type your message..."
                                            className="flex-1 bg-gray-800/50 border-gray-700/50 text-white placeholder:text-gray-500
                             focus:ring-2 focus:ring-blue-500/20"
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter" && !e.shiftKey) {
                                                    e.preventDefault()
                                                    //sendMessage()
                                                    onChat()
                                                }
                                            }}
                                        />
                                        <Button
                                            onClick={onChat}
                                            //disabled={!newMessage.trim()}
                                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700
                             hover:to-purple-700 text-white"
                                        >
                                            <Send className="h-4 w-4" />
                                        </Button>
                                    </form>
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
                                <FAQSection faqs={helpdesk} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        )
    }
)

BotWindow.displayName = 'BotWindow'
