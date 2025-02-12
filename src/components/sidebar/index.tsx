"use client"
import React, {ReactNode} from 'react'
import { usePathname } from "next/navigation";

import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarProvider,
    SidebarTrigger,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarFooter,
} from "@/components/ui/sidebar"
import {
    LayoutDashboard,
    MessageSquare,
    Link2,
    Settings,
    Calendar,
    Mail,
    Bell,
    ChevronRight,
    Users,
    LogOut,
    Menu,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import DomainMenu from "@/components/sidebar/domain-menu";
import useSideBar from "@/context/use-sidebar";

type Props = {
    children: ReactNode
    domains:
        | {
        id: string
        name: string
        icon: string
    }[]
        | null
        | undefined
}

const SideBar = ({children, domains}: Props) => {

    const menuItems = [
        { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
        { icon: MessageSquare, label: "Conversations", href: "/conversations" },
        { icon: Users, label: "Customers", href: "/customers" },
        { icon: Link2, label: "Integrations", href: "/integrations" },
        { icon: Calendar, label: "Appointments", href: "/appointments" },
        { icon: Mail, label: "Email Marketing", href: "/email" },
        { icon: Settings, label: "Settings", href: "/settings" },
    ]

    const pathname = usePathname()
    const { onSignOut } = useSideBar()

    return (
        <SidebarProvider>
            <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 w-full">
                <Sidebar collapsible="icon" className="bg-green-500">
                    <SidebarHeader className="border-b border-blue-700/20 p-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                        <div className="flex items-center gap-2">
                            <div className="size-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-[2px] shadow-lg shadow-blue-500/20">
                                <div className="size-full rounded-[10px] bg-gray-900 flex items-center justify-center">
                                    <div className="size-6 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500" />
                                </div>
                            </div>
                            <span className="font-bold text-white text-xl">Zelio AI</span>
                        </div>
                    </SidebarHeader>
                    <SidebarContent className="px-3 py-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                        <SidebarMenu>
                            {menuItems.map((item) => {
                                const isActive = pathname === item.href; // Vérifie si la page correspond
                                return (
                                    <SidebarMenuItem key={item.label}>
                                        <SidebarMenuButton
                                            asChild
                                            tooltip={item.label}
                                            className={cn(
                                                "w-full gap-3 rounded-lg px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700/50",
                                                "transition-all duration-200 ease-in-out",
                                                isActive && "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-white shadow-lg shadow-blue-500/10"
                                            )}
                                        >
                                            <a href={item.href} className="flex items-center">
                                                <item.icon className="size-5" />
                                                <span className="font-medium">{item.label}</span>
                                                {isActive && <ChevronRight className="ml-auto size-4 text-gray-300" />}
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                        <DomainMenu domains={domains}/>
                    </SidebarContent>
                    <SidebarFooter className="border-t border-blue-700/20 p-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                        <div className="flex items-center gap-3 px-2">
                            <Avatar className="size-10 border-2 border-gray-700">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 overflow-hidden">
                                <p className="text-sm font-semibold text-white truncate">John Doe</p>
                                <p className="text-xs text-gray-400 truncate">john@example.com</p>
                            </div>
                        </div>
                    </SidebarFooter>
                </Sidebar>

                <div className="flex-1 flex flex-col">
                    <header className="h-18 bg-gray-800/50 backdrop-blur-xl border-b border-gray-700/20 sticky top-0 z-50 shadow-md">
                        <div className="flex h-16 items-center gap-4 px-6">
                            <SidebarTrigger className="text-gray-200 hover:text-white">
                                <Menu className="size-6" />
                            </SidebarTrigger>
                            <div className="ml-auto flex items-center gap-4">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="relative text-gray-200 hover:text-white hover:bg-blue-700/20"
                                >
                                    <Bell className="size-5" />
                                    <span className="absolute -top-0.5 -right-0.5 size-2.5 bg-blue-500 rounded-full border-2 border-blue-950" />
                                </Button>
                                <Button
                                    onClick={onSignOut}
                                    variant="ghost" size="sm" className="text-gray-200 hover:text-white hover:bg-blue-700/20 gap-2">
                                    <LogOut className="size-4" />
                                    <span className="text-sm font-medium">Logout</span>
                                </Button>
                            </div>
                        </div>
                    </header>
                    <main className="flex-1 overflow-auto p-6">{children}</main>
                </div>
            </div>
        </SidebarProvider>
    )
}
export default SideBar
