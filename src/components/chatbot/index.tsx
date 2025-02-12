'use client'
import { useChatBot } from '@/hooks/chatbot/use-chatbot'
import React from 'react'
import { BotWindow } from './window'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import {Button} from "@/components/ui/button";
import {MessageCircle} from "lucide-react";


const AiChatBot = () => {
    const {
        onOpenChatBot,
        botOpened,
        onChats,
        register,
        onStartChatting,
        onAiTyping,
        messageWindowRef,
        currentBot,
        loading,
        onRealTime,
        setOnChats,
        errors,
    } = useChatBot()


    return (
        <div className=" h-screen flex flex-col justify-end items-end">
            {botOpened && (
                <BotWindow
                    errors={errors}
                    setChat={setOnChats}
                    realtimeMode={onRealTime}
                    helpdesk={currentBot?.helpdesk!}
                    domainName={currentBot?.name!}
                    ref={messageWindowRef}
                    help={currentBot?.chatBot?.helpdesk}
                    theme={currentBot?.chatBot?.background}
                    textColor={currentBot?.chatBot?.textColor}
                    chats={onChats}
                    register={register}
                    onChat={onStartChatting}
                    onResponding={onAiTyping}
                />
            )}
                {currentBot?.chatBot?.icon ? (
                    <div
                        className={cn(
                            'rounded-full relative cursor-pointer shadow-md h-14 w-14 flex items-center justify-center bg-grandis',
                            loading ? 'invisible' : 'visible'
                        )}
                        onClick={onOpenChatBot}
                    >
                    <Image
                        src={`https://ucarecdn.com/${currentBot.chatBot.icon}/`}
                        alt="bot"
                        fill
                    />
                    </div>
                ) : (
                    <Button
                        onClick={onOpenChatBot}
                        className={cn(
                            "h-14 w-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600",
                            "hover:from-blue-700 hover:to-purple-700",
                            "transition-all duration-200",
                            'relative cursor-pointer shadow-md flex items-center justify-center',
                            loading ? 'invisible' : 'visible'
                        )}
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] opacity-0 hover:opacity-100 hover:animate-shimmer" />
                        <MessageCircle className="h-6 w-6 text-white" />
                    </Button>
                )}
        </div>
    )
}

export default AiChatBot

/*'use client'
import { useChatBot } from '@/hooks/chatbot/use-chatbot'
import React from 'react'
import { BotWindow } from './window'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { BotIcon } from '@/icons/bot-icon'

type Props = {}

const AiChatBot = (props: Props) => {
    const {
        onOpenChatBot,
        botOpened,
        onChats,
        register,
        onStartChatting,
        onAiTyping,
        messageWindowRef,
        currentBot,
        loading,
        onRealTime,
        setOnChats,
        errors,
    } = useChatBot()

    return (
        <div className="h-screen flex flex-col justify-end items-end gap-4">
            {botOpened && (
                <BotWindow
                    errors={errors}
                    setChat={setOnChats}
                    realtimeMode={onRealTime}
                    helpdesk={currentBot?.helpdesk!}
                    domainName={currentBot?.name!}
                    ref={messageWindowRef}
                    help={currentBot?.chatBot?.helpdesk}
                    theme={currentBot?.chatBot?.background}
                    textColor={currentBot?.chatBot?.textColor}
                    chats={onChats}
                    register={register}
                    onChat={onStartChatting}
                    onResponding={onAiTyping}
                />
            )}
            <div
                className={cn(
                    'rounded-full relative cursor-pointer shadow-md w-20 h-20 flex items-center justify-center bg-grandis',
                    loading ? 'invisible' : 'visible'
                )}
                onClick={onOpenChatBot}
            >

                ) : (
                    <BotIcon />
                )}
            </div>
        </div>
    )
}

export default AiChatBot*/

