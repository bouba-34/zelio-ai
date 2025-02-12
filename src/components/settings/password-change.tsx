"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock } from "lucide-react"

export function PasswordChange() {
    const [formData, setFormData] = useState({
        newPassword: "",
        confirmPassword: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle password change
    }

    return (
        <Card className="border-gray-700/20 bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-xl">
            <CardHeader>
                <CardTitle className="text-xl font-semibold text-white flex items-center gap-2">
                    <Lock className="h-5 w-5 text-blue-400" />
                    Change Password
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="newPassword" className="text-sm text-gray-400">
                            New Password
                        </Label>
                        <Input
                            id="newPassword"
                            type="password"
                            value={formData.newPassword}
                            onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                            className="bg-gray-800/50 border-gray-700/20 text-white placeholder:text-gray-500
                       focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="confirmPassword" className="text-sm text-gray-400">
                            Confirm Password
                        </Label>
                        <Input
                            id="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            className="bg-gray-800/50 border-gray-700/20 text-white placeholder:text-gray-500
                       focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600
                     hover:to-cyan-600 text-white shadow-lg shadow-blue-500/20"
                    >
                        Change Password
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}

