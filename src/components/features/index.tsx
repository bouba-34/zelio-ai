import React from 'react'
import {FEATURES} from "@/constants/landing";
import FeatureCard from "@/components/features/feature-card";

const Features = () => {
    return (
        <section id="features" className="space-y-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white">Empower Your Business with AI</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {FEATURES.map((feature) => (
                    <FeatureCard feature={feature} key={feature.id}/>
                ))}
        </div>
        </section>
    )
}
export default Features
