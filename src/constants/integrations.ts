/*export type IntegrationsListItemProps = {
    id: string
    name: 'stripe'
    logo: string
    description: string
    title: string
    modalDescription: string,
    marketplaceDescription: string,
    permissions: string[]
}

export const INTEGRATION_LIST_ITEMS: IntegrationsListItemProps[] = [
    {
        id: '1',
        name: 'stripe',
        description:
            'Stripe is the fastest and easiest way to integrate payments and financial services into your software platform or marketplace.',
        logo: '914be637-39bf-47e6-bb81-37b553163945',
        title: 'Connect Stripe Account',
        modalDescription:
            'The world’s most successful platforms and marketplaces including Shopify and DoorDash, use Stripe Connect.',
        marketplaceDescription:
            "The world's most successful platforms and marketplaces including Shopify and DoorDash, use Stripe Connect.",
        permissions: [
            "Payment and bank information",
            "Products and services you sell",
            "Business and tax information",
            "Create and update Products",
        ],
    },
]
 */

export interface Integration {
    id: string
    name: string
    description: string
    icon: string
    marketplaceDescription: string
    permissions: string[]
}

export const integrations: Integration[] = [
    {
        id: "stripe",
        name: "Stripe",
        description:
            "Stripe is the fastest and easiest way to integrate payments and financial services into your marketplace",
        icon: "stripe.png",
        marketplaceDescription:
            "The world's most successful platforms and marketplaces including Shopify and DoorDash, use Stripe Connect.",
        permissions: [
            "Payment and bank information",
            "Products and services you sell",
            "Business and tax information",
            "Create and update Products",
        ],
    },
]
