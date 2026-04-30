import React from 'react';
import Navbar from '../../components/Navbar';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#FCFBF4] text-slate-900 font-sans">
            <Navbar alwaysSolid />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                
                <h1 className="text-4xl md:text-5xl font-bold mb-8">About Us</h1>
                
                <div className="prose prose-lg prose-slate max-w-none">
                    <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                        At CloudHisaab, our mission is to empower Indian retailers and distributors with modern, simple, and powerful technology.
                    </p>
                    
                    <div className="space-y-6 text-slate-700">
                        <p>
                            Founded with a vision to digitize the retail sector, CloudHisaab is a cloud-based ERP and billing software designed specifically for the unique needs of modern businesses. We understand that managing inventory, generating GST-compliant invoices, and maintaining customer ledgers can be time-consuming and error-prone when done manually.
                        </p>
                        <p>
                            That's why we built a solution that is not only lightning-fast but also incredibly easy to use. Our platform allows business owners to focus on what they do best—growing their business—while we handle the technical complexities of accounting and stock management.
                        </p>
                        <p>
                            Our team consists of passionate engineers and domain experts who are dedicated to providing the best possible support and continuous innovation. We believe that world-class software shouldn't be complicated or prohibitively expensive, which is why our platform scales with your business from day one.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
