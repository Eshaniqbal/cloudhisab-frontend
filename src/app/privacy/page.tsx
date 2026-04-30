import React from 'react';
import Navbar from '../../components/Navbar';

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-[#FCFBF4] text-slate-900 font-sans">
            <Navbar alwaysSolid />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                
                <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
                <p className="text-slate-500 mb-12">Last updated: {new Date().toLocaleDateString()}</p>
                
                <div className="space-y-8 text-slate-700 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
                        <p>We collect information you provide directly to us when you register for an account, update your profile, use our services, or contact our support team. This may include your name, email address, phone number, business details, and billing information.</p>
                    </section>
                    
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h2>
                        <p>We use the information we collect to operate, maintain, and provide you with the features and functionality of our Service. We may also use it to communicate with you, process your transactions, and provide customer support.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Data Security</h2>
                        <p>We use industry-standard bank-level 256-bit AES encryption to protect your data. All transactions and data syncing are encrypted over SSL. We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Sharing of Information</h2>
                        <p>We do not share your personal information with third parties except as described in this privacy policy, such as with service providers who need access to such information to carry out work on our behalf.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us at support@cloudhisab.in or call us at +91 9419403158.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
