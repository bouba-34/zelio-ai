import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import UsageItem from "@/components/dashboard/usage-item";

type PlanUsageProps = {
    plan: 'STANDARD' | 'PRO' | 'ULTIMATE'
    credits: number
    domains: number
    clients: number
}

const UsageSection = ({
                          plan,
                          credits,
                          domains,
                          clients,
                      }: PlanUsageProps) => {
    return (
        <Card className="border-gray-700/20 bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-lg">
            <CardHeader className="border-b border-gray-700/20 pb-4">
                <CardTitle className="text-lg font-semibold text-white">Plan Usage</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
                <UsageItem label="Email Credits" current={credits} max={plan == 'STANDARD' ? 10 : plan == 'PRO' ? 50 : 500} info="Monthly email sending limit" />
                <UsageItem label="Domains" current={domains} max={plan == 'STANDARD' ? 1 : plan == 'PRO' ? 2 : 100} info="Number of websites connected" />
                <UsageItem label="Contacts" current={clients} max={plan == 'STANDARD' ? 10 : plan == 'PRO' ? 50 : 500} info="Total contacts in your database" />
            </CardContent>
        </Card>
    )
}
export default UsageSection
