import React from 'react'
import {onLoginUser} from "@/actions/auth";
import SideBar from "@/components/sidebar";
import {ChatProvider} from "@/context/user-chat-context";

type Props = {
    children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
    const authenticated = await onLoginUser()
    if (!authenticated) return null
    return (
        <ChatProvider>
            <SideBar domains={authenticated.domain}>
                {children}
            </SideBar>
        </ChatProvider>
    )
}
export default Layout
