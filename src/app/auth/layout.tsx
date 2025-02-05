import { currentUser } from '@clerk/nextjs'
import React from 'react'
import {redirect} from "next/navigation";
import Image from "next/image";

type Props = {
    children: React.ReactNode
}

const Layout = async ({children}: Props) => {
    const user = await currentUser()

    if (user) redirect('/')
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
            <div className="container max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                {children}
                </div>
                <div className="lg:block hidden">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/30 to-purple-500/30 rounded-2xl blur-3xl" />
                        <div className="relative bg-slate-800/50 border border-slate-700/50 backdrop-blur-xl rounded-2xl p-8">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="h-3 w-3 rounded-full bg-rose-500" />
                                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                                <div className="h-3 w-3 rounded-full bg-green-500" />
                            </div>
                            <Image
                                src={`${process.env.NEXT_PUBLIC_VERCEL_URL}/placeholder.svg?height=400&width=600`}
                                alt="Dashboard Preview"
                                className="rounded-lg border border-slate-700/50"
                                width={600}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Layout
