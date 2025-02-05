import React from 'react'
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import { cn, extractUUIDFromString, getMonthName } from '@/lib/utils'

import {motion} from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type Props = {
    message: {
        role: 'assistant' | 'user'
        content: string
        link?: string
    }
    createdAt?: Date
}

const Bubble = ({ message, createdAt }: Props) => {

    let d = new Date()
    const image = extractUUIDFromString(message.content)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}
        >
            <div className="flex items-start gap-2 max-w-[80%]">
                {message.role === "assistant" ? (
                    <Avatar className="h-8 w-8 border border-gray-800">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                ) : image ? (
                        <Avatar className="h-8 w-8 border border-gray-800">
                            <AvatarImage src={`https://ucarecdn.com/${image[0]}/`} alt="image" />
                            <AvatarFallback>CL</AvatarFallback>
                        </Avatar>
                ) : (
                    <p className="text-sm">
                        {message.content.replace('(complete)', ' ')}
                        {message.link && (
                            <Link
                                className="underline font-bold pl-2"
                                href={message.link}
                                target="_blank"
                            >
                                Your Link
                            </Link>
                        )}
                    </p>
                )}
                <div>
                    <div
                        className={cn(
                            "rounded-2xl px-4 py-2 text-sm",
                            message.role === "user"
                                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                                : "bg-gray-800 text-gray-100",
                        )}
                    >
                        {message.content}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="flex gap-2 text-xs text-gray-500">
                            <p>
                                {createdAt?.getDate()} {getMonthName(createdAt!.getMonth())}
                            </p>
                            <p>
                                {createdAt?.getHours()}:{createdAt?.getMinutes()}
                                {createdAt!.getHours() > 12 ? 'PM' : 'AM'}
                            </p>
                        </span>
                        {/*message.role === "user" && message.status && (
                            <span className="text-xs text-gray-500">
                                {message.status === "sending" && "Sending..."}
                                {message.status === "sent" && "Sent"}
                                {message.status === "delivered" && "Delivered"}
                                {message.status === "read" && "Read"}
                              </span>
                        )*/}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
export default Bubble
