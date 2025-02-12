"use client"
import React from 'react'
import {cn} from "@/lib/utils";
import {AlertTriangle, Circle} from "lucide-react";
import {motion} from "framer-motion";
import {useChatTime} from "@/hooks/conversation/use-conversation";

type Props = {
    title: string
    description?: string
    createdAt: Date
    id: string
    onChat(): void
    seen?: boolean
    selectedId: string | null
}

const ChatCard = ({
                      title,
                      description,
                      createdAt,
                      onChat,
                      id,
                      seen,
                      selectedId,
                  }: Props) => {


    const { messageSentAt, urgent } = useChatTime(createdAt, id)


    return (
        <motion.button
            onClick={onChat}
            className={cn(
                "w-full text-left p-4 rounded-xl transition-all duration-300",
                "hover:bg-gray-800/50 hover:shadow-lg hover:shadow-blue-500/5",
                "relative overflow-hidden group",
                selectedId === id &&
                "bg-gradient-to-r from-blue-500/10 to-cyan-500/10 shadow-lg shadow-blue-500/10",
            )}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            {!seen && (
                <Circle className="absolute right-3 top-3 h-2 w-2 fill-blue-500 text-blue-500" />
            )}
            <div className="flex justify-between items-start mb-2">
                <span className="text-sm font-medium text-gray-200 truncate flex items-center gap-2">
                  {title}
                    {urgent && <AlertTriangle className="h-4 w-4 text-amber-400" />}
                </span>
                <span className="text-xs text-gray-400 tabular-nums">{createdAt ? messageSentAt : ''}</span>
            </div>
            <p className="text-sm text-gray-400 truncate mb-2">{description
                ? description.substring(0, 20) + '...'
                : 'This chatroom is empty'}</p>
            <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-gray-700" />
                {/*<p className="text-xs text-gray-500">{conversation.domain}</p>*/}
            </div>
        </motion.button>
    )
}
export default ChatCard

/*'use client'
import { useChatTime } from '@/hooks/conversation/use-conversation'
import React from 'react'
import { Card, CardContent, CardDescription } from '../ui/card'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { User } from 'lucide-react'
import { UrgentIcon } from '@/icons/urgent-icon'

type Props = {
    title: string
    description?: string
    createdAt: Date
    id: string
    onChat(): void
    seen?: boolean
}

const ChatCard = ({
                      title,
                      description,
                      createdAt,
                      onChat,
                      id,
                      seen,
                  }: Props) => {
    const { messageSentAt, urgent } = useChatTime(createdAt, id)

    return (
        <Card
            onClick={onChat}
            className="rounded-none border-r-0 hover:bg-muted cursor-pointer transition duration-150 ease-in-out"
        >
            <CardContent className="py-4 flex gap-3">
                <div>
                    <Avatar>
                        <AvatarFallback className="bg-muted">
                            <User />
                        </AvatarFallback>
                    </Avatar>
                </div>
                <div className="flex justify-between w-full">
                    <div>
                        <div className="flex gap-5 items-center">
                            <CardDescription className="font-bold leading-none text-gray-600">
                                {title}
                            </CardDescription>
                            {urgent && !seen && <UrgentIcon />}
                        </div>
                        <CardDescription>
                            {description
                                ? description.substring(0, 20) + '...'
                                : 'This chatroom is empty'}
                        </CardDescription>
                    </div>
                    <div className="w-[100px] flex justify-end">
                        <CardDescription className="text-xs">
                            {createdAt ? messageSentAt : ''}
                        </CardDescription>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ChatCard*/

