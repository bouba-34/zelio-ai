import React from 'react'
import ConversationList from "@/components/conversations/conversation-list";
import ChatArea from "@/components/conversations/chat-area";

const ConversationsPage = () => {
    return (
        <div className="h-[calc(100vh-7rem)] rounded-xl border border-gray-700/20 bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-xl overflow-hidden">
            <div className="grid h-full lg:grid-cols-[350px,1fr]">
                <ConversationList />
                <ChatArea />
            </div>
        </div>
    )
}
export default ConversationsPage
