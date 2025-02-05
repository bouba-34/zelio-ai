import React from 'react'
import {Sparkles} from "lucide-react";
import {FieldErrors, FieldValues, UseFormRegister} from 'react-hook-form';
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {ErrorMessage} from "@hookform/error-message";

type Props = {
    register: UseFormRegister<FieldValues>
    errors: FieldErrors<FieldValues>
}

const AccountDetailsForm = ({ errors, register }: Props) => {
    return (
        <>
            <div className="inline-flex items-center gap-2 text-teal-400 bg-teal-950/30 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Account Details</span>
            </div>

            <div className="space-y-2">
                <h1 className="text-4xl font-bold text-white">Create your account</h1>
                <p className="text-slate-400">Enter your details to set up your account and get started.</p>
            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-slate-200">
                        Full Name
                    </Label>
                    <Input
                        id="fullname"
                        type="text"
                        placeholder="John Doe"
                        className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-teal-500 focus:ring-teal-500/20"
                        {...register("fullname")}
                    />
                    <ErrorMessage
                        errors={errors}
                        name={"fullname"}
                        render={({ message }) => (
                            <p className="text-red-400 mt-2">
                                {message === 'Required' ? '' : message}
                            </p>
                        )}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-200">
                        Email
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-teal-500 focus:ring-teal-500/20"
                        {...register("email")}
                    />
                    <ErrorMessage
                        errors={errors}
                        name={"email"}
                        render={({ message }) => (
                            <p className="text-red-400 mt-2">
                                {message === 'Required' ? '' : message}
                            </p>
                        )}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="password" className="text-slate-200">
                        Password
                    </Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-teal-500 focus:ring-teal-500/20"
                        {...register("password")}
                    />
                    <ErrorMessage
                        errors={errors}
                        name={"password"}
                        render={({ message }) => (
                            <p className="text-red-400 mt-2">
                                {message === 'Required' ? '' : message}
                            </p>
                        )}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-slate-200">
                        Confirm Password
                    </Label>
                    <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-teal-500 focus:ring-teal-500/20"
                        {...register("confirmPassword")}
                    />
                    <ErrorMessage
                        errors={errors}
                        name={"confirmPassword"}
                        render={({ message }) => (
                            <p className="text-red-400 mt-2">
                                {message === 'Required' ? '' : message}
                            </p>
                        )}
                    />
                </div>
                </div>
        </>
    )
}
export default AccountDetailsForm
