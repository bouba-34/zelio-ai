"use client"
import Image from "next/image"
import { Check, X, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import ConnectButton from "@/components/integrations/connect-button";

interface IntegrationDetailsModalProps {
    isOpen: boolean
    onClose: () => void
    integration: {
        id: string
        name: string
        icon: string
        description: string
        permissions: string[]
    } | null
    connections: {
        stripe: boolean
    }
}

export function IntegrationDetailsModal({ isOpen, onClose, integration, connections }: IntegrationDetailsModalProps) {
    if (!isOpen || !integration) return null

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
                onClick={(e) => {
                    if (e.target === e.currentTarget) onClose()
                }}
            >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="relative w-full max-w-md overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl"
                >
                    {/* Decorative corner gradients */}
                    <div className="absolute top-0 right-0 h-24 w-24 -translate-y-12 translate-x-12 bg-blue-500 opacity-20 blur-2xl" />
                    <div className="absolute bottom-0 left-0 h-24 w-24 translate-y-12 -translate-x-12 bg-purple-500 opacity-20 blur-2xl" />

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 rounded-full p-1 text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                        <X className="h-5 w-5" />
                    </button>

                    <div className="relative p-6">
                        {/* Header */}
                        <div className="mb-6 flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-2">
                                    <Image src="/placeholder.svg" alt="App Icon" width={40} height={40} className="object-contain" />
                                </div>
                                <ArrowRight className="h-5 w-5 text-gray-600" />
                                <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-2">
                                    <Image
                                        src={"/images/" + integration.icon || "/placeholder.svg"}
                                        alt={integration.name}
                                        width={30}
                                        height={30}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Title */}
                        <h2 className="mb-2 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-xl font-bold text-transparent">
                            Connect {integration.name} Account
                        </h2>
                        <p className="mb-6 text-sm text-gray-400">{integration.description}</p>

                        {/* Permissions */}
                        <div className="mb-6 space-y-3 rounded-xl bg-gray-800/50 p-4">
                            <h3 className="text-sm font-medium text-gray-400">{integration.name} would like to access:</h3>
                            {integration.permissions.map((permission, index) => (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    key={index}
                                    className="flex items-start gap-3"
                                >
                                    <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                                        <Check className="h-3 w-3 text-blue-400" />
                                    </div>
                                    <span className="text-sm text-gray-300">{permission}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Actions */}
                        <ConnectButton type={integration.name.toLowerCase()} connections={connections} />
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

