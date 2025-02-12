import React from 'react'
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {TypingIndicator} from "@/components/chatbot/typing-indicator";
import {motion} from "framer-motion";

export const Responding = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex items-start gap-2"
        >
            <Avatar className="h-8 w-8 border border-gray-800">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <TypingIndicator />
        </motion.div>
    )
}

/*import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export const Responding = () => {
    return (
        <div className="self-start flex items-end gap-3">
            <Avatar className="w-5 h-5">
                <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="chat-bubble">
                <div className="typing">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
        </div>
    )
}*/

