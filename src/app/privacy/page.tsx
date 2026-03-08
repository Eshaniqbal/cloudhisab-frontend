import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
                    <h1 className="text-4xl font-extrabold mb-8 text-slate-900">Privacy Policy</h1>

                    <div className="space-y-6 text-slate-600 leading-relaxed">
                        <p className="text-sm text-slate-500">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Information We Collect</h2>
                            <p>We collect information that you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This includes your name, email address, phone number, physical address, and billing information.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. How We Use Information</h2>
                            <p>We may use the information we collect about you for a variety of purposes, including to provide, maintain, and improve our services; to process transactions and send you related information; to respond to your comments, questions, and requests; and for customer service and support.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Data Security</h2>
                            <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. Your data is stored on secure cloud servers with strict access controls.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Sharing of Information</h2>
                            <p>We do not share your personal information with third parties except as required by law, to protect our rights or the rights of others, or to provide our services through trusted third-party service providers bound by confidentiality obligations.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Contact Us</h2>
                            <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@cloudhisab.in" className="text-brand-600 hover:underline">support@cloudhisab.in</a>.</p>
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
