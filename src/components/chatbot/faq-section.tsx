"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type FAQ = {
    question: string;
    answer: string;
};

type FAQSectionProps = {
    faqs: FAQ[];
};


export function FAQSection({ faqs }: FAQSectionProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-4 space-y-4 h-[calc(100vh-180px)] overflow-y-auto scrollbar-hide" // Adjust height to account for header
        >
            <div className="space-y-2">
                <h2 className="text-lg font-semibold text-white">Help Desk</h2>
                <p className="text-sm text-gray-400">Find answers to frequently asked questions</p>
            </div>

            <Accordion type="single" collapsible className="space-y-2">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <AccordionItem value={`item-${index}`} className="border-gray-800">
                            <AccordionTrigger className="text-white hover:text-white hover:no-underline">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-400">{faq.answer}</AccordionContent>
                        </AccordionItem>
                    </motion.div>
                ))}
            </Accordion>

        </motion.div>
    )
}

