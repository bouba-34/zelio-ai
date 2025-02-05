import React from 'react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import {Bot, HelpCircle} from "lucide-react";

type Props = {
    triggers: {
        label: string
        icon?: JSX.Element
    }[]
    children: React.ReactNode
    className?: string
    button?: JSX.Element
}

const TabsMenu = ({ triggers, children, className, button }: Props) => {
    return (
        <Tabs
            defaultValue={triggers[0].label}
            className="w-full"
        >
            <TabsList className={cn('pr-5 bg-gray-800/50 border border-gray-700/50', className)}>
                {triggers.map((trigger, key) => (
                    <TabsTrigger
                        key={key}
                        value={trigger.label}
                        className="capitalize flex gap-2 font-semibold
                        data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/20
                       data-[state=active]:to-purple-500/20 data-[state=active]:text-white flex items-center gap-2"
                    >
                        {trigger.label === 'questions' ? <Bot className="h-4 w-4" /> : <HelpCircle className="h-4 w-4" />
                        }
                        {trigger.icon && trigger.icon}
                        {trigger.label}
                    </TabsTrigger>
                ))}
                {button}
            </TabsList>
            {children}
        </Tabs>
    )
}

export default TabsMenu
