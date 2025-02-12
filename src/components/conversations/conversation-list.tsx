"use client"

import React from 'react'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { useConversation } from '@/hooks/conversation/use-conversation'
import ConversationSearch from "@/components/conversations/search";
import {Loader} from "@/components/loader";
import ChatCard from "@/components/conversations/chat-card";

const tabs = ["Unread", "All", "Expired", "Shared"] as const
type Tab = (typeof tabs)[number]

type Props = {
    domains?:
        | {
        name: string
        id: string
        icon: string
    }[]
        | undefined
}


const ConversationList = ({ domains }: Props) => {
    const [activeTab, setActiveTab] = useState<Tab>("All")
    const [selectedId, setSelectedId] = useState<string>("")

    const { register, chatRooms, loading, onGetActiveChatMessages } =
        useConversation()


    return (
        <div className="border-r border-gray-700/20 bg-gray-900/20">
            <div className="p-4 border-b border-gray-700/20 backdrop-blur-xl bg-gray-900/20">
                <ConversationSearch domains={domains}
                                    register={register}/>
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
                    <Loader loading={loading}>
                        {chatRooms.length ? (
                            chatRooms.map((room) => (
                                <ChatCard
                                    seen={room.chatRoom[0].message[0]?.seen}
                                    id={room.chatRoom[0].id}
                                    onChat={() => {
                                        onGetActiveChatMessages(room.chatRoom[0].id).then(() => setSelectedId(room.chatRoom[0].id))
                                    }}
                                    createdAt={room.chatRoom[0].message[0]?.createdAt}
                                    key={room.chatRoom[0].id}
                                    title={room.email!}
                                    description={room.chatRoom[0].message[0]?.message}
                                    selectedId={selectedId}
                                />
                            ))
                        ) : (
                            <div className="text-gray-400">No chats for this domain</div>
                        )}
                    </Loader>
                </div>
            </ScrollArea>
        </div>
    )
}
export default ConversationList
