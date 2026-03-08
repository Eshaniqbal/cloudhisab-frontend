import React from 'react';
import Link from 'next/link';

export default function ContactUs() {
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
                <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm text-center">
                    <h1 className="text-4xl font-extrabold mb-8 text-slate-900">Contact Us</h1>

                    <div className="space-y-8 text-slate-600 leading-relaxed text-lg max-w-2xl mx-auto">
                        <p className="text-slate-500">We're here to help! If you have any questions, concerns, or need assistance with CloudHisaab, please don't hesitate to reach out to us using the information below.</p>

                        <div className="flex flex-col items-center gap-6 mt-8">
                            <div className="bg-brand-50 p-6 rounded-2xl w-full border border-brand-100 flex flex-col items-center">
                                <span className="text-2xl mb-2">📞</span>
                                <h3 className="font-bold text-slate-800 text-xl mb-1">Phone / WhatsApp</h3>
                                <a href="tel:+919419403158" className="text-brand-600 hover:text-brand-700 font-medium">+91 9419403158</a>
                            </div>

                            <div className="bg-brand-50 p-6 rounded-2xl w-full border border-brand-100 flex flex-col items-center">
                                <span className="text-2xl mb-2">📧</span>
                                <h3 className="font-bold text-slate-800 text-xl mb-1">Email</h3>
                                <a href="mailto:support@cloudhisab.in" className="text-brand-600 hover:text-brand-700 font-medium">support@cloudhisab.in</a>
                            </div>

                            <div className="bg-brand-50 p-6 rounded-2xl w-full border border-brand-100 flex flex-col items-center">
                                <span className="text-2xl mb-2">📍</span>
                                <h3 className="font-bold text-slate-800 text-xl mb-1">Address</h3>
                                <p className="text-slate-600 text-center">Jammu & Kashmir, India</p>
                            </div>
                        </div>

                        <div className="mt-12 text-sm text-slate-500">
                            <p>Support Hours: Monday - Saturday | 9:00 AM to 6:00 PM</p>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-slate-900 py-10 text-slate-400 border-t border-slate-800 mt-20">
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
