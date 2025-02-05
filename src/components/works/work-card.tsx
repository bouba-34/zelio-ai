import React from 'react'
import {HowItWorks} from "@/constants/landing";

type Props = {
    work: HowItWorks
}

const WorkCard = ({work}: Props) => {
    return (
        <div key={work.step} className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center text-2xl font-bold text-white mx-auto">
                {work.step}
            </div>
            <h3 className="text-xl font-semibold text-white">{work.title}</h3>
            <p className="text-slate-300">{work.description}</p>
        </div>
    )
}
export default WorkCard
