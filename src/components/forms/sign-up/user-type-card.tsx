"use client"
import React from 'react'
import {FieldValues, UseFormRegister} from 'react-hook-form'
import {Card} from "@/components/ui/card";
import {ArrowRight, Building2, GraduationCap} from 'lucide-react';
import { Label } from '@/components/ui/label'
import {Input} from "@/components/ui/input";
import { cn } from '@/lib/utils';

type Props = {
    value: string
    title: string
    text: string
    register: UseFormRegister<FieldValues>
    userType: 'owner' | 'student'
    setUserType: React.Dispatch<React.SetStateAction<'owner' | 'student'>>
}

const UserTypeCard = ({
                          register,
                          setUserType,
                          text,
                          title,
                          userType,
                          value,
                      }: Props) => {
    return (
        <Label htmlFor={value}>
        <Card
            className="p-6 hover:bg-slate-800/50 transition-colors border-slate-800 bg-slate-800/30 backdrop-blur-xl group cursor-pointer"
        >
            <div className="flex items-start gap-4">
                    {value === 'owner' ? <div className="p-3 rounded-lg bg-teal-500/10 text-teal-400">
                        <Building2 className="w-6 h-6" />
                    </div> :  <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
                        <GraduationCap className="w-6 h-6" />
                    </div>}
                <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1 flex items-center gap-2">
                        {title}
                    </h3>
                    <p className="text-slate-400 text-sm">{text}</p>
                </div>
                <div
                    className={cn(
                        'w-4 h-4 rounded-full',
                        userType === value ? 'bg-teal-500' : 'bg-slate-700'
                    )}
                >
                    <Input
                        {...register('type', {
                            onChange: (event) => setUserType(event.target.value),
                        })}
                        value={value}
                        id={value}
                        className="hidden"
                        type="radio"
                    />
                </div>
            </div>
        </Card>
        </Label>
    )
}
export default UserTypeCard
