import React from 'react'
import { Button } from "@/components/ui/button"
import { Globe, Trash2 } from "lucide-react"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface DomainHeaderProps {
    domain: string
}


const DomainHeader = ({ domain }: DomainHeaderProps) => {
    return (
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-[2px]">
                    <div className="h-full w-full rounded-[10px] bg-gray-900 flex items-center justify-center">
                        <Globe className="h-6 w-6 text-blue-400" />
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-white flex items-center gap-2">{domain}</h1>
                    <p className="text-sm text-gray-400">Modify domain settings, change chatbot options, and train your bot</p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <Button
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700
                   hover:to-cyan-700 text-white relative overflow-hidden group"
                >
                    <div
                        className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)]
                        opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"
                    />
                    Save Changes
                </Button>

                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="destructive" className="bg-red-600/10 text-red-500 hover:bg-red-600/20">
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-gray-900 border border-gray-800">
                        <AlertDialogHeader>
                            <AlertDialogTitle className="text-white">Delete Domain</AlertDialogTitle>
                            <AlertDialogDescription className="text-gray-400">
                                This will permanently delete {domain} and all associated data. This action cannot be undone.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel className="bg-gray-800 text-white hover:bg-gray-700">Cancel</AlertDialogCancel>
                            <AlertDialogAction className="bg-red-600 text-white hover:bg-red-700">Delete Domain</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </div>
    )
}
export default DomainHeader
