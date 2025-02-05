"use client"
import React, {useState} from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bot, Settings, Package, Code } from "lucide-react"
import DomainSettings from './domain-settings'
import ChatbotSettings from './chatbot-settings'
import BotTraining from "@/components/domain/bot-training";
import Products from "@/components/domain/products";

interface DomainTabsProps {
    domain: string
}


const DomainTabs = ({ domain }: DomainTabsProps) => {
    const [activeTab, setActiveTab] = useState("settings")

    return (
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="bg-gray-800/50 border border-gray-700/50 p-1 gap-1">
                <TabsTrigger
                    value="settings"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/20
                   data-[state=active]:to-cyan-500/20 data-[state=active]:text-white"
                >
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                </TabsTrigger>
                <TabsTrigger
                    value="chatbot"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/20
                   data-[state=active]:to-cyan-500/20 data-[state=active]:text-white"
                >
                    <Bot className="h-4 w-4 mr-2" />
                    Chatbot
                </TabsTrigger>
                <TabsTrigger
                    value="training"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/20
                   data-[state=active]:to-cyan-500/20 data-[state=active]:text-white"
                >
                    <Code className="h-4 w-4 mr-2" />
                    Training
                </TabsTrigger>
                <TabsTrigger
                    value="products"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/20
                   data-[state=active]:to-cyan-500/20 data-[state=active]:text-white"
                >
                    <Package className="h-4 w-4 mr-2" />
                    Products
                </TabsTrigger>
            </TabsList>

            <TabsContent value="settings" className="space-y-6">
                <DomainSettings domain={domain} />
            </TabsContent>

            <TabsContent value="chatbot" className="space-y-6">
                <ChatbotSettings />
            </TabsContent>

            <TabsContent value="training" className="space-y-6">
                <BotTraining />
            </TabsContent>

            <TabsContent value="products" className="space-y-6">
                <Products />
            </TabsContent>
        </Tabs>
    )
}
export default DomainTabs
