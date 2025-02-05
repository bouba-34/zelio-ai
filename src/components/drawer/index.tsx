"use client"
import React from 'react'
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerTitle,
    DrawerTrigger,
} from '../ui/drawer'

type Props = {
    onOpen: JSX.Element
    children: React.ReactNode
    title: string
    description: string
}

const AppDrawer = ({ children, description, onOpen, title }: Props) => {
    return (
        <Drawer>
            <DrawerTrigger>{onOpen}</DrawerTrigger>
            <DrawerContent className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 text-white">
                <div className="container flex flex-col items-center gap-2 pb-10 text-white">
                    <DrawerTitle>{title}</DrawerTitle>
                    <DrawerDescription className="text-white">{description}</DrawerDescription>
                    {children}
                </div>
            </DrawerContent>
        </Drawer>
    )
}

export default AppDrawer