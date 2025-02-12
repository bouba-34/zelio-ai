"use client"

import { motion } from "framer-motion"

export function TypingIndicator() {
    return (
        <div className="flex items-center gap-1 px-3 py-2 bg-gray-800 rounded-2xl w-fit">
            {[1, 2, 3].map((dot) => (
                <motion.div
                    key={dot}
                    className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                    animate={{
                        y: ["0%", "-50%", "0%"],
                    }}
                    transition={{
                        duration: 0.8,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        delay: dot * 0.15,
                    }}
                />
            ))}
        </div>
    )
}