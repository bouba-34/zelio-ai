import DomainHeader from '@/components/domain/domain-header'
import DomainTabs from '@/components/domain/domain-tabs'
import React from 'react'
import {onGetCurrentDomainInfo} from "@/actions/settings";
import { redirect } from 'next/navigation';
import SettingsForm from "@/components/forms/settings/form";
import BotTrainingForm from "@/components/forms/settings/bot-training";

interface DomainPageProps {
    params: {
        domain: string
    }
}


const DomainPage = async ({params}: DomainPageProps) => {
    const domain = await onGetCurrentDomainInfo(params.domain)
    if (!domain) redirect('/dashboard')
    return (

        <div className="relative space-y-8">
            <SettingsForm
                plan={domain.subscription?.plan!}
                chatBot={domain.domains[0].chatBot}
                id={domain.domains[0].id}
                name={domain.domains[0].name}
            />
            <BotTrainingForm id={domain.domains[0].id} />
            {/*<ProductTable
                id={domain.domains[0].id}
                products={domain.domains[0].products || []}
            />*/}
        </div>
    )
}
export default DomainPage
