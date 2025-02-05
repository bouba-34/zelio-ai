import React from 'react'
import Link from "next/link";

const Foooter = () => {
    return (
        <footer className="bg-slate-800/50 mt-32">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Product</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                                    Use Cases
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                                    Help Center
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-700 text-center text-slate-400">
                    © 2025 Zelio AI. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
export default Foooter
