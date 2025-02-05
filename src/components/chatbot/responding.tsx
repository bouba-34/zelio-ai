import React from 'react'
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {TypingIndicator} from "@/components/chatbot/typing-indicator";
import {motion} from "framer-motion";

const Responding = () => {
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
export default Responding
