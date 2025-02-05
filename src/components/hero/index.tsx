import React from 'react'
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {ChevronRight} from "lucide-react";
import Link from "next/link";

const Hero = () => {


    return (
        <section className="text-center space-y-8">
            <Badge variant="outline" className="text-teal-400 border-teal-400 py-1 px-4 text-sm">
                Revolutionize Your Sales Process
            </Badge>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
                Your AI-Powered <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
              Sales Assistant
            </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Zelio instantly transforms your website into an intelligent sales machine, engaging customers 24/7 with
                personalized interactions.
            </p>
            <div className="flex justify-center space-x-4">
                <Link href="/auth/sign-up">
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white"
                    >
                        Get Started Free
                        <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
                <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white border-white hover:bg-white hover:text-slate-900"
                >
                    Watch Demo
                </Button>
            </div>
        </section>
    )
}
export default Hero
