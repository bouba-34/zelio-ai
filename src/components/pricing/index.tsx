import React from 'react'
import {PRICING} from "@/constants/landing";
import PriceCard from "@/components/pricing/price-card";

const Pricing = () => {
    return (
        <section id="pricing" className="space-y-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white">Simple, Transparent Pricing</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {PRICING.map((pricing, index) => (
                    <PriceCard plan={pricing} index={index} key={index}/>
                ))}
            </div>
        </section>
    )
}
export default Pricing
