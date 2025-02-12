"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Paperclip, MoreVertical, PhoneCall } from "lucide-react"
import {useChatWindow} from "@/hooks/conversation/use-conversation";
import {Loader} from "@/components/loader";
import Bubble from "@/components/chatbot/bubble";
import {Label} from "@/components/ui/label";
import RealTimeSwitch from "@/components/conversations/real-time-switch";

const ChatArea = () => {

    const {
        messageWindowRef,
        chats,
        loading,
        chatRoom,
        onHandleSentMessage,
        register,
    } = useChatWindow()



    return (
        <div className="flex flex-col h-full bg-gradient-to-b from-gray-900/50 to-gray-800/50 overflow-hidden">
            <div className="sticky top-0 z-20 flex items-center justify-between p-4 border-b border-gray-700/20 backdrop-blur-xl bg-gray-900/20">
                <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-[1px]">
                        <div className="h-full w-full rounded-full bg-gray-900 flex items-center justify-center">
                            <span className="text-white font-semibold">PT</span>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-white">Conversation</h2>
                        {/*<p className="text-sm text-gray-400">with prodigiestesting@gmail.com</p>*/}
                    </div>
                    {chatRoom && <RealTimeSwitch/>}
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

            {/*<div className="flex-1 p-4 overflow-hidden">
                <ScrollArea className="h-[calc(100vh-12rem)] flex flex-col space-y-2 overflow-y-auto bg-red-500">
                    <Loader loading={loading}>
                        {chats.length ? (
                            chats.map((chat) => (
                                <Bubble
                                    key={chat.id}
                                    message={{
                                        role: chat.role!,
                                        content: chat.message,
                                    }}
                                    createdAt={chat.createdAt}
                                />
                            ))
                        ) : (
                            <div className="flex-1 h-0 w-full flex flex-col text-gray-400">
                                No Chat Selected
                            </div>
                        )}
                    </Loader>
                    <div ref={messageWindowRef} />
                </ScrollArea>
            </div>*/}

            <div className="flex-1 p-4 overflow-hidden">
                <Loader loading={loading}>
                    <div
                        className="h-full flex flex-col space-y-2 px-4 overflow-y-auto scrollbar-hide"
                    >
                        {chats.length ? (
                            chats.map((chat) => (
                                <Bubble
                                    key={chat.id}
                                    message={{
                                        role: chat.role!,
                                        content: chat.message,
                                    }}
                                    createdAt={chat.createdAt}
                                />
                            ))
                        ) : (
                            <div className="flex-1 h-0 w-full flex flex-col text-gray-400">
                                No Chat Selected
                            </div>
                        )}
                    </div>
                    <div ref={messageWindowRef} />
                </Loader>
            </div>

            <div className="sticky bottom-0 p-4 border-t border-gray-700/20 backdrop-blur-xl bg-gray-900/20">
                <form
                    onSubmit={onHandleSentMessage}
                    className="max-w-3xl mx-auto flex items-center gap-2">
                    <Label htmlFor="bot-image">
                        <Paperclip className="h-4 w-4 text-gray-400 hover:text-white" />
                        <Input
                            {...register('image')}
                            type="file"
                            id="bot-image"
                            className="hidden"
                        />
                    </Label>


                    <Input
                        placeholder="Type your message..."
                        {...register('content')}
                        className="bg-gray-800/50 border-gray-700/20 text-white placeholder:text-gray-400
                     focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    />
                    <Button
                        className="shrink-0 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600
                     text-white shadow-lg shadow-blue-500/20 transition-all duration-300"
                        disabled={!chatRoom}
                    >
                        <Send className="h-4 w-4" />
                    </Button>
                </form>
            </div>
        </div>
    )
}
export default ChatArea
