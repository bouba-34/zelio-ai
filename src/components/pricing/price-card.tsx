"use client"
import React from 'react'
import {Pricing} from "@/constants/landing";
import {Card, CardContent} from "@/components/ui/card";
import { Check } from 'lucide-react';
import {Button} from "@/components/ui/button";

type Props = {
    plan: Pricing,
    index: number
}

const PriceCard = ({plan, index}: Props) => {
    return (
        <Card
            key={index}
            className={`bg-slate-800/50 border-slate-700 ${index === 1 ? "border-teal-500 border-2" : ""}`}
        >
            <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <div className="text-4xl font-bold text-teal-400">{plan.price}</div>
                <p className="text-slate-300">per month</p>
                <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-slate-300">
                            <Check className="h-5 w-5 text-teal-400 mr-2" />
                            {feature}
                        </li>
                    ))}
                </ul>
                <Button
                    className={`w-full ${index === 1 ? "bg-teal-500 hover:bg-teal-600" : "bg-slate-700 hover:bg-slate-600"}`}
                    onClick={() => {
                        if (index === 2) {
                            console.log("Contacting sales for Enterprise plan")
                        } else {
                            console.log(`Starting ${plan.name} plan`)
                        }
                    }}
                >
                    {index === 2 ? "Contact Sales" : "Get Started"}
                </Button>
            </CardContent>
        </Card>
    )
}
export default PriceCard
