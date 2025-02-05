"use client"
import React from 'react'
import {useFormContext} from "react-hook-form";
import {Mail, Sparkles, Lock} from "lucide-react";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Checkbox} from "@/components/ui/checkbox";
import Link from "next/link";
import {ErrorMessage} from "@hookform/error-message";


const LoginForm = () => {

    const {
        register,
        formState: { errors },
    } = useFormContext()

    return (
        <>
            <div className="inline-flex items-center gap-2 text-teal-400 bg-teal-950/30 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Welcome Back</span>
            </div>
            <div className="space-y-2">
                <h1 className="text-4xl font-bold text-white">Sign in to Zelio AI</h1>
                <p className="text-slate-400">Enter your credentials to access your account</p>
            </div>
            <Label htmlFor="email" className="text-slate-200">
                Email
            </Label>
            <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-teal-500 focus:ring-teal-500/20"
                    {...register("email")}
                />
            </div>

            <ErrorMessage
                errors={errors}
                name={"email"}
                render={({ message }) => (
                    <p className="text-red-400 mt-2">
                        {message === 'Required' ? '' : message}
                    </p>
                )}
            />

            <Label htmlFor="password" className="text-slate-200">
                Password
            </Label>
            <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-teal-500 focus:ring-teal-500/20"
                    {...register("password")}
                />
            </div>
            <ErrorMessage
                errors={errors}
                name={"password"}
                render={({ message }) => (
                    <p className="text-red-400 mt-2">
                        {message === 'Required' ? '' : message}
                    </p>
                )}
            />

            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-sm text-slate-200">
                        Remember me
                    </Label>
                </div>
                <Link href="/forgot-password" className="text-sm text-teal-400 hover:text-teal-300">
                    Forgot password?
                </Link>
            </div>
        </>
    )
}
export default LoginForm
