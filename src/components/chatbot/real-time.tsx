import React from 'react'
import { Card } from '../ui/card'
import { useRealTime } from '@/hooks/chatbot/use-chatbot'
import {Bot, User} from "lucide-react";
import {Badge} from "@/components/ui/badge";

type Props = {
    chatRoomId: string
    setChats: React.Dispatch<
        React.SetStateAction<
            {
                role: 'user' | 'assistant'
                content: string
                link?: string | undefined
            }[]
        >
    >
}

const RealTimeMode = ({ chatRoomId, setChats }: Props) => {
    useRealTime(chatRoomId, setChats)

    console.log("chatRoom id from realTimeMode component", chatRoomId)

    return (
        <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
            <User className="h-4 w-4" />
            Online
        </Badge>
    )
}

export default RealTimeMode
