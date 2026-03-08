import React from 'react';
import Link from 'next/link';

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-200 selection:text-brand-900">
            <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <Link href="/" className="flex items-center">
                            <img src="/logo1.png" alt="CloudHisaab Logo" className="h-16 w-auto" />
                        </Link>
                        <div className="hidden md:flex items-center space-x-8">
                            <Link href="/" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Home</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
                <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
                    <h1 className="text-4xl font-extrabold mb-8 text-slate-900">Terms and Conditions</h1>

                    <div className="space-y-6 text-slate-600 leading-relaxed">
                        <p className="text-sm text-slate-500">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Acceptance of Terms</h2>
                            <p>By accessing and using CloudHisaab, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Provision of Services</h2>
                            <p>You agree and acknowledge that CloudHisaab is entitled to modify, improve or discontinue any of its services at its sole discretion and without notice to you even if it may result in you being prevented from accessing any information contained in it.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Proprietary Rights</h2>
                            <p>You acknowledge and agree that CloudHisaab may contain proprietary and confidential information including trademarks, service marks and patents protected by intellectual property laws and international intellectual property treaties. CloudHisaab authorizes you to view and make a single copy of portions of its content for offline, personal, non-commercial use. Our content may not be sold, reproduced, or distributed without our written permission.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Termination of Agreement</h2>
                            <p>The Terms of this agreement will continue to apply in perpetuity until terminated by either party without notice at any time for any reason. Terms that are to continue in perpetuity shall be unaffected by the termination of this agreement.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Disclaimer of Warranties</h2>
                            <p>You understand and agree that your use of CloudHisaab is entirely at your own risk and that our services are provided "As Is" and "As Available". CloudHisaab does not make any express or implied warranties, endorsements or representations whatsoever as to the operation of the CloudHisaab website, information, content, materials, or products.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Limitation of Liability</h2>
                            <p>You understand and agree that CloudHisaab and any of its subsidiaries or affiliates shall in no event be liable for any direct, indirect, incidental, consequential, or exemplary damages. This shall include, but not be limited to damages for loss of profits, business interruption, business reputation or goodwill, loss of programs or information or other intangible loss arising out of the use of or the inability to use the service, or information.</p>
                        </section>
                    </div>
                </div>
            </main>

            <footer className="bg-slate-900 py-10 text-slate-400 border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>© {new Date().getFullYear()} CloudHisaab. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
