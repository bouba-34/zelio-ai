import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import UsageItem from "@/components/dashboard/usage-item";

const UsageSection = () => {
    return (
        <Card className="border-gray-700/20 bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-lg">
            <CardHeader className="border-b border-gray-700/20 pb-4">
                <CardTitle className="text-lg font-semibold text-white">Plan Usage</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
                <UsageItem label="Email Credits" current={0} max={10} info="Monthly email sending limit" />
                <UsageItem label="Domains" current={0} max={1} info="Number of websites connected" />
                <UsageItem label="Contacts" current={0} max={10} info="Total contacts in your database" />
            </CardContent>
        </Card>
    )
}
export default UsageSection
