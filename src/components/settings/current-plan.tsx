import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, Users, Mail, Zap } from "lucide-react"

export function CurrentPlan() {
    const features = [
        { icon: Globe, text: "1 domain" },
        { icon: Users, text: "10 contacts" },
        { icon: Mail, text: "10 Emails per month" },
    ]

    return (
        <Card className="border-gray-700/20 bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-xl">
            <CardHeader className="pb-8">
                <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl font-semibold text-white">Current Plan</CardTitle>
                    <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-3">
                        STANDARD
                    </Badge>
                </div>
                <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-white">$10</span>
                    <span className="text-gray-400">/month</span>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <div
                                className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10
                            flex items-center justify-center"
                            >
                                <feature.icon className="h-4 w-4 text-blue-400" />
                            </div>
                            <span className="text-gray-300">{feature.text}</span>
                        </div>
                    ))}
                    <Button
                        className="w-full mt-6 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600
                     hover:to-cyan-600 text-white shadow-lg shadow-blue-500/20"
                    >
                        <Zap className="h-4 w-4 mr-2" />
                        Upgrade Plan
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

