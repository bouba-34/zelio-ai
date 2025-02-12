import React from 'react'
import {ExternalLink} from "lucide-react";
import {StripeConnect} from "@/components/settings/stripe-connect";

type Props = {
    type: string
    connections: {
        [key in 'stripe']: boolean
    }
}

const ConnectButton = ({type, connections}: Props) => {
        switch(type) {
            case 'stripe':
                return (
                    <div className="flex items-center justify-between">
                        <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-300">
                            Learn more
                            <ExternalLink className="h-3 w-3" />
                        </button>
                        <StripeConnect connected={connections[type]} />
                    </div>
                )
            default:
                return <></>
        }
}
export default ConnectButton
