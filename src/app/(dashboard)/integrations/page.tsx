import React from 'react'
import IntegrationList from "@/components/integrations/integration-list";
import {onGetPaymentConnected} from "@/actions/settings";



const Page = async () => {

    const payment = await onGetPaymentConnected()

    const connections = {
        stripe: !!payment,
    }

    return (
        <>
            <div className="space-y-2 mb-8">
                <h1 className="text-2xl font-semibold tracking-tight text-white">Integration</h1>
                <p className="text-gray-400">Connect third-party applications into Zelio-AI</p>
            </div>
            <IntegrationList connections={connections}/>
        </>
    )
}
export default Page
