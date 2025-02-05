import { Bot, Brain, Mail, ShoppingCart, LucideIcon } from "lucide-react";

export type Feature = {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon; // Stocke la référence du composant et non un élément JSX
};

export const FEATURES: Feature[] = [
    {
        id: "1",
        icon: Bot, // On stocke la référence du composant (PAS <Bot />)
        title: "Instant AI Chatbot",
        description: "Connect your domain and get an AI-powered chatbot that knows your business inside out.",
    },
    {
        id: "2",
        icon: Mail,
        title: "Smart Notifications",
        description: "Receive email alerts when your AI needs human assistance, ensuring no query goes unanswered.",
    },
    {
        id: "3",
        icon: Brain,
        title: "Continuous Learning",
        description: "Train your AI with filtered questions, constantly improving its knowledge and capabilities.",
    },
    {
        id: "4",
        icon: ShoppingCart,
        title: "AI-Powered Sales",
        description: "Let your AI assistant showcase and sell products directly through chat interactions.",
    },
];

export type HowItWorks = {
    step: string;
    title: string;
    description: string;
}

export const HOW_IT_WORKS: HowItWorks[] = [
    {
        step: "1",
        title: "Connect Your Domain",
        description: "Simply add our script to your website, and Zelio is ready to assist your visitors.",
    },
    {
        step: "2",
        title: "Customize Your AI",
        description: "Train Zelio with your business knowledge, FAQs, and product information.",
    },
    {
        step: "3",
        title: "Watch Sales Soar",
        description: "Sit back as Zelio engages visitors, answers queries, and drives conversions 24/7.",
    },
];

export type Pricing = {
    name: string;
    price: string;
    features: string[];
};

export const PRICING: Pricing[] = [
    {
        name: "Free",
        price: "$0",
        features: [
            "1 domain",
            "10 Email credits",
            "10 Contacts",
            "1,000 Monthly Interactions",
            "Basic AI Training",
            "Community Support",
        ],
    },
    {
        name: "Pro",
        price: "$49",
        features: [
            "10 domains",
            "50 Email credits",
            "1,000 Contacts",
            "20,000 Monthly Interactions",
            "Advanced AI Training",
            "Product Selling Capability",
            "API Access",
            "Priority Email Support",
        ],
    },
    {
        name: "Enterprise",
        price: "Custom Pricing",
        features: [
            "Unlimited domains",
            "Unlimited Email credits",
            "Unlimited Contacts",
            "Unlimited Interactions",
            "Custom AI Model",
            "Dedicated Account Manager",
            "Full API Access & Webhooks",
            "24/7 Premium Support",
            "Custom Integrations",
        ],
    },
];
