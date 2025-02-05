import React from 'react'
import {onLoginUser} from "@/actions/auth";
import SideBar from "@/components/sidebar";

type Props = {
    children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
    const authenticated = await onLoginUser()
    if (!authenticated) return null
    return (
        <SideBar domains={authenticated.domain}>
            {children}
        </SideBar>
    )
}
export default Layout
