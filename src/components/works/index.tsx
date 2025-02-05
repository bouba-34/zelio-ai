import React from 'react'
import {HOW_IT_WORKS} from "@/constants/landing";
import WorkCard from "@/components/works/work-card";

const HowItWork = () => {
    return (
        <section className="space-y-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white">How Zelio Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {HOW_IT_WORKS.map((work, index) => (
                    <WorkCard work={work} key={index}/>
                ))}
            </div>
        </section>
    )
}
export default HowItWork
