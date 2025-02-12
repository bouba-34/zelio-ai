import React from 'react'
import { getUserAppointments } from '@/actions/appointment'
import {
    getUserBalance,
    getUserClients,
    getUserPlanInfo,
    getUserTotalProductPrices,
    getUserTransactions,
} from '@/actions/dashboard'
import { Users, DollarSign, Calendar, TrendingUp, Search, Sparkles, Wallet } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import MetricsCard from "@/components/dashboard/metrics-card";
import UsageSection from "@/components/dashboard/usage-section";
import { TransactionsIcon } from '@/icons/transactions-icon'

const DashBoardPage = async () => {

    const clients = await getUserClients()
    const sales = await getUserBalance()
    const bookings = await getUserAppointments()
    const plan = await getUserPlanInfo()
    const transactions = await getUserTransactions()
    const products = await getUserTotalProductPrices()

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">Dashboard</h1>
                    <p className="text-sm text-gray-300">
                        Welcome back! Here's an overview of your AI-powered sales performance.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400"/>
                        <Input
                            placeholder="Search..."
                            className="pl-9 bg-gray-800/50 border-gray-700/20 text-white w-[200px] placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20"
                        />
                    </div>
                    <Button
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
                        <Sparkles className="mr-2 size-4"/>
                        Generate Insights
                    </Button>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <MetricsCard title="Potential Clients" value={clients || 0} icon={Users} money={false}/>
                <MetricsCard title="Pipeline Value" value={products! * clients! || 0} icon={DollarSign} money={true}/>
                <MetricsCard title="Appointments" value={bookings || 0} icon={Calendar} money={false}/>
                <MetricsCard title="Total Sales" value={sales || 0} icon={TrendingUp} money={true}/>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <UsageSection plan={plan!.plan!}
                              credits={plan?.credits || 0}
                              domains={plan?.domains || 0}
                              clients={clients || 0}/>
                <Card className="border-gray-700/20 bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-lg">
                    <CardHeader className="flex flex-row gap-3 items-center border-b border-gray-700/20 pb-4">
                        <Wallet className="text-blue-300"/>
                        <CardTitle className="text-lg font-semibold text-white">Recent Transactions</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <div className="text-center text-sm text-gray-300">
                            Transactions will appear here soon.
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
export default DashBoardPage
