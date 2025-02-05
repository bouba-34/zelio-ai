"use client"
import React, {useState} from 'react'
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

const CTA = () => {
    const [email, setEmail] = useState("")

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault()
        console.log("Starting free trial with email:", email)
        // Here you would typically send this to your backend or email service
    }
    return (
        <section className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Supercharge Your Sales?</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Join thousands of businesses already using Zelio to boost their online sales and customer engagement.
            </p>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
                <Input
                    placeholder="Enter your email"
                    className="max-w-xs mx-auto sm:mx-0 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                    type="submit"
                    size="lg"
                    className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white"
                >
                    Start Free Trial
                </Button>
            </form>
            <p className="text-sm text-slate-400">No credit card required. 14-day free trial.</p>
        </section>
    )
}
export default CTA
