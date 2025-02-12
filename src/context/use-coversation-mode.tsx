"use client"
import {useChatContext} from "@/context/user-chat-context";
import { useToast } from "@/hooks/use-toast";
import {useEffect, useState} from "react";
import {onGetConversationMode, onToggleRealtime} from "@/actions/conversation";

const useConversationMode = () => {
    const { toast } = useToast()
    const [realtime, setRealtime] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const { chatRoom } = useChatContext()

    const onActivateRealtime = async (e: any) => {
        try {
            const realtime = await onToggleRealtime(
                chatRoom!,
                e.target.ariaChecked != 'true'
            )
            if (realtime) {
                setRealtime(realtime.chatRoom.live)
                toast({
                    title: 'Success',
                    description: realtime.message,
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const onGetCurrentMode = async () => {
        setLoading(true)
        const mode = await onGetConversationMode(chatRoom!)
        if (mode) {
            setRealtime(mode.live)
            setLoading(false)
        }
    }

    useEffect(() => {
        if (chatRoom) {
            onGetCurrentMode()
        }
    }, [chatRoom])

    return {
        realtime,
        onActivateRealtime,
        chatRoom,
        loading,
    }

}

export default useConversationMode;