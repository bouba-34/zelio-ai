import React from 'react'
import {Feature} from "@/constants/landing";
import {Card, CardContent} from "@/components/ui/card";

type Props = {
    feature: Feature
}

const FeatureCard = ({feature}: Props) => {
    const Icon = feature.icon; // Assigne la référence du composant
    return (
        <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6 space-y-4">
                <Icon className="h-12 w-12 text-teal-400" /> {/* On l'appelle comme un composant JSX */}
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
            </CardContent>
        </Card>
    )
}
export default FeatureCard
