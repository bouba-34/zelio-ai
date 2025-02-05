"use client"
import React, {useState} from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Copy, Check } from "lucide-react"
import { motion } from "framer-motion"

interface DomainSettingsProps {
    domain: string
}


const DomainSettings = ({ domain }: DomainSettingsProps) => {
    const [copied, setCopied] = useState(false)
    const codeSnippet = `const iframe = document.createElement('iframe');
const iframeStyles = (styleString) => {
  const style = document.createElement('style');
  style.textContent = styleString;
  document.head.append(style);
}

iframeStyles\`
  .chat-frame {
    position: fixed;
    bottom: 20px;
    right: 20px;
    border: none;
  }
\`

iframe.src = "https://app.zelio.ai/chatbot/${domain}"
iframe.classList.add('chat-frame')
document.body.appendChild(iframe)

window.addEventListener("message", (e) => {
  if(e.origin !== "https://app.zelio.ai") return null
})`

    const copyToClipboard = () => {
        navigator.clipboard.writeText(codeSnippet)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="grid gap-6">
            <Card className="border-0 bg-gradient-to-b from-gray-800/50 to-gray-900/50">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20" />
                <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-xl">
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold text-white">Domain Configuration</CardTitle>
                        <CardDescription className="text-gray-400">
                            Configure your domain settings and get the installation code
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="domain" className="text-sm text-gray-400">
                                Domain Name
                            </Label>
                            <Input
                                id="domain"
                                value={domain}
                                readOnly
                                className="bg-gray-800/50 border-gray-700/20 text-white font-mono"
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label className="text-sm text-gray-400">Installation Code</Label>
                                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white" onClick={copyToClipboard}>
                                    {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                                </Button>
                            </div>
                            <motion.div
                                className="relative rounded-lg overflow-hidden"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-blue-500/5" />
                                <pre className="p-4 bg-gray-900/50 text-gray-300 font-mono text-sm overflow-x-auto">{codeSnippet}</pre>
                            </motion.div>
                        </div>
                    </CardContent>
                </div>
            </Card>
        </div>
    )
}
export default DomainSettings
