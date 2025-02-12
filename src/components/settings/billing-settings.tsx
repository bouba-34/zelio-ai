import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, Plus } from "lucide-react"

export function BillingSettings() {
    return (
        <Card className="border-gray-700/20 bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-xl">
            <CardHeader>
                <CardTitle className="text-xl font-semibold text-white flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-blue-400" />
                    Billing Settings
                </CardTitle>
                <CardDescription className="text-gray-400">
                    Add payment information, upgrade and modify your plan
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Button
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600
                   hover:to-cyan-600 text-white shadow-lg shadow-blue-500/20"
                >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Payment Method
                </Button>
            </CardContent>
        </Card>
    )
}

