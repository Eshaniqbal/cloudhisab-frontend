import React from 'react';
import Navbar from '../../components/Navbar';

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-[#FCFBF4] text-slate-900 font-sans">
            <Navbar alwaysSolid />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                
                <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
                <p className="text-slate-500 mb-12">Last updated: {new Date().toLocaleDateString()}</p>
                
                <div className="space-y-8 text-slate-700 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
                        <p>By accessing or using the CloudHisaab service, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.</p>
                    </section>
                    
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Description of Service</h2>
                        <p>CloudHisaab is a cloud-based billing, inventory, and accounting software designed for retailers and distributors. We reserve the right to modify or discontinue, temporarily or permanently, the service with or without notice.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Responsibilities</h2>
                        <p>You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password. You agree not to disclose your password to any third party.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Billing and Refunds</h2>
                        <p>Our service is billed on a subscription basis. You will be billed in advance on a recurring and periodic basis. We do not provide refunds or credits for any partial subscription periods.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Termination</h2>
                        <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
