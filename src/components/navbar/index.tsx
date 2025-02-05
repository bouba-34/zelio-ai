import React from 'react'
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {onLoginUser} from "@/actions/auth";

const NavBar = async () => {
    const authenticated = await onLoginUser()
    return (
        <header className="container mx-auto px-4 py-8">
            <nav className="flex justify-between items-center">
                <div className="text-2xl font-bold text-white">Zelio AI</div>
                <div className="space-x-4">
                    <Link href="#features" className="text-slate-300 hover:text-white transition-colors">
                        Features
                    </Link>
                    <Link href="#pricing" className="text-slate-300 hover:text-white transition-colors">
                        Pricing
                    </Link>
                    {authenticated ? (
                        <Link href="/dashboard" className="text-slate-300 hover:text-white transition-colors">
                             Dashboard
                        </Link>
                    ) : (
                        <Link href="/auth/sign-in">
                            <Button
                                variant="outline"
                                className="bg-transparent text-white border-white hover:bg-white hover:text-slate-900"
                            >
                                Sign In
                            </Button>
                        </Link>
                    )}
                </div>
            </nav>
        </header>
    )
}
export default NavBar
