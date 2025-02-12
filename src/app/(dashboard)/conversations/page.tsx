import React from 'react'
import ConversationList from "@/components/conversations/conversation-list";
import ChatArea from "@/components/conversations/chat-area";
import {onGetAllAccountDomains} from "@/actions/auth";

const ConversationsPage = async () => {

    const domains = await onGetAllAccountDomains()


    return (
        <div className="h-[calc(100vh-7rem)] rounded-xl border border-gray-700/20 bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-xl overflow-hidden">
            <div className="grid h-full lg:grid-cols-[350px,1fr]">
                <ConversationList domains={domains?.domains}/>
                <ChatArea/>
            </div>
        </div>
    )
}
export default ConversationsPage

/*import { onGetAllAccountDomains } from '@/actions/settings'
import ConversationMenu from '@/components/conversations'
import Messenger from '@/components/conversations/messenger'
import InfoBar from '@/components/infobar'
import { Separator } from '@/components/ui/separator'
import React from 'react'

type Props = {}

const ConversationPage = async (props: Props) => {
    const domains = await onGetAllAccountDomains()
    return (
        <div className="w-full h-full flex">
            <ConversationMenu domains={domains?.domains} />

            <Separator orientation="vertical" />
            <div className="w-full flex flex-col">
                <div className="px-5">
                    <InfoBar />
                </div>
                <Messenger />
            </div>
        </div>
    )
}

export default ConversationPage*/

