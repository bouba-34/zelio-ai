"use client"
import React, {useState} from 'react'
import {Integration, integrations} from "@/constants/integrations";
import {IntegrationCard} from "@/components/integrations/integration-card";
import {IntegrationDetailsModal} from "@/components/integrations/integration-details-modal";

type Props = {
    connections: {
        stripe: boolean
    }
}

const IntegrationList = ({ connections }: Props) => {

    const [selectedIntegration, setSelectedIntegration] = useState<Integration | null>(null)

    const openModal = (integration: Integration) => {
        setSelectedIntegration(integration)
    }

    const closeModal = () => {
        setSelectedIntegration(null)
    }


    return (
        <>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                {integrations.map((integration) => (
                    <IntegrationCard
                        key={integration.id}
                        name={integration.name}
                        description={integration.description}
                        icon={integration.icon}
                        connections={connections}
                        onClick={() => openModal(integration)}
                    />
                ))}
            </div>
            <IntegrationDetailsModal
                isOpen={!!selectedIntegration}
                onClose={closeModal}
                integration={
                    selectedIntegration
                        ? {
                            ...selectedIntegration,
                            description: selectedIntegration.marketplaceDescription,
                        }
                        : null
                }
                connections={connections}
            />
        </>
    )
}
export default IntegrationList
