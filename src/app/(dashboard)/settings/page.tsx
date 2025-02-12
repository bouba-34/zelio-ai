import { BillingSettings } from '@/components/settings/billing-settings'
import React from 'react'
import {ThemeSelector} from "@/components/settings/theme-selector";
import {PasswordChange} from "@/components/settings/password-change";
import {CurrentPlan} from "@/components/settings/current-plan";

const SettingsPage = () => {
    return (
        <>
        <div>
            <h1 className="text-3xl font-bold text-white">Settings</h1>
            <p className="text-sm text-gray-400 mt-1">Manage your account settings, preferences and integrations</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-8">
                <BillingSettings />
                {/*<ThemeSelector />*/}
                <PasswordChange />
            </div>
            <div>
                <CurrentPlan />
            </div>
        </div>
        </>
    )
}
export default SettingsPage
