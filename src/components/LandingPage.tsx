"use client";

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import {
    CheckCircle2, ChevronRight, Menu, X, Cloud, Zap, Package, BarChart3, TrendingUp, Users, Shield, Phone
} from 'lucide-react';

const fadeIn: Variants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } }
};

export default function LandingPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white font-sans text-black overflow-x-hidden">
            {/* Navbar */}
            <nav className="w-full bg-white border-b-[3px] border-black px-4 sm:px-6 lg:px-8 py-4 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <a href="#" className="flex items-center space-x-2">
                        <span className="font-black text-2xl uppercase tracking-tighter">CloudHisaab</span>
                    </a>

                    <div className="hidden md:flex items-center space-x-10">
                        <a href="#features" className="font-bold text-xs uppercase tracking-widest hover:text-[#ff5cd3] transition-colors">Features</a>
                        <a href="#pricing" className="font-bold text-xs uppercase tracking-widest hover:text-[#ff5cd3] transition-colors">Pricing</a>
                        <a href="#faq" className="font-bold text-xs uppercase tracking-widest hover:text-[#ff5cd3] transition-colors">FAQ</a>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <motion.a 
                            href="https://app.cloudhisab.in"
                            whileHover={{ scale: 1.05, x: -2, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-2 font-black text-xs uppercase border-2 border-black bg-[#ffeb00] hover:bg-[#e6d300] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-shadow inline-block"
                        >
                            Start Now
                        </motion.a>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-white border-b-3 border-black p-6 space-y-4 font-bold text-xs uppercase tracking-widest"
                >
                    <a href="#features" className="block" onClick={() => setIsMenuOpen(false)}>Features</a>
                    <a href="#pricing" className="block" onClick={() => setIsMenuOpen(false)}>Pricing</a>
                    <a href="#faq" className="block" onClick={() => setIsMenuOpen(false)}>FAQ</a>
                    <div className="pt-4">
                        <a href="https://app.cloudhisab.in" className="block w-full py-4 border-2 border-black bg-[#ffeb00] font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center uppercase">Start Now</a>
                    </div>
                </motion.div>
            )}

            {/* Hero Section */}
            <section className="bg-[#5b611c] pt-24 pb-40 px-4 border-b-[3px] border-black overflow-hidden relative">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    {/* Floating icons */}
                    <motion.div 
                        animate={{ y: [0, -20, 0], rotate: [-15, -10, -15] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 left-0 -translate-x-12 opacity-30 pointer-events-none"
                    >
                        <FileIcon />
                    </motion.div>
                    <motion.div 
                        animate={{ y: [0, 20, 0], rotate: [15, 20, 15] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-0 right-0 translate-x-12 opacity-30 pointer-events-none"
                    >
                        <TagIcon />
                    </motion.div>

                    <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={fadeIn}>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-6">
                            Run Your Shop <br />
                            <motion.span 
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.4, type: "spring" }}
                                className="bg-[#f3f4f6] text-[#5b611c] px-6 py-2 inline-block border-[4px] border-black mt-4 rotate-[-1deg]"
                            >
                                Like A Boss
                            </motion.span>
                        </h1>
                        <p className="text-white/90 font-bold text-xl md:text-2xl max-w-2xl mx-auto mb-16 leading-tight uppercase italic tracking-tight">
                            The only Cloud ERP for modern merchants who value speed, style, and massive growth. No more messy ledgers.
                        </p>
                    </motion.div>

                    {/* Enhanced Dashboard Illustration */}
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="max-w-4xl mx-auto bg-white border-[4px] border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] rounded-sm overflow-hidden relative"
                    >
                        {/* Browser Top Bar */}
                        <div className="bg-[#e5e7eb] border-b-[3px] border-black p-4 flex items-center justify-between">
                            <div className="flex space-x-2">
                                <div className="w-4 h-4 rounded-full bg-[#ff5f56] border-2 border-black/20"></div>
                                <div className="w-4 h-4 rounded-full bg-[#ffbd2e] border-2 border-black/20"></div>
                                <div className="w-4 h-4 rounded-full bg-[#27c93f] border-2 border-black/20"></div>
                            </div>
                            <div className="bg-white border-2 border-black/10 px-12 py-1 rounded text-[10px] font-black text-black/20 uppercase tracking-widest hidden sm:block">cloudhisab.in/dashboard</div>
                            <div className="text-xs font-black text-black/30 uppercase tracking-widest">V2.4.0</div>
                        </div>

                        <div className="flex h-[400px] md:h-[450px]">
                            {/* Dashboard Sidebar - Hidden on small mobile */}
                            <div className="hidden sm:flex w-16 md:w-20 border-r-[4px] border-black bg-slate-50 flex-col items-center py-6 space-y-6">
                                {[1, 2, 3, 4].map((i) => (
                                    <motion.div 
                                        key={i}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className={`w-8 h-8 md:w-10 md:h-10 border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${i === 1 ? 'bg-[#ff5cd3]' : 'bg-white'}`}
                                    ></motion.div>
                                ))}
                            </div>

                            {/* Dashboard Main Content */}
                            <div className="flex-1 p-4 md:p-6 flex flex-col gap-4 md:gap-6 overflow-hidden">
                                {/* Header Mockup */}
                                <div className="flex justify-between items-center">
                                    <div className="space-y-1 md:space-y-2">
                                        <div className="w-20 md:w-32 h-3 md:h-4 bg-black/10"></div>
                                        <div className="w-32 md:w-48 h-5 md:h-6 bg-black"></div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-[3px] border-black bg-[#00f5ff]"></div>
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-col lg:flex-row gap-4 md:gap-6 min-h-0">
                                    {/* Main Chart Area */}
                                    <div className="flex-[2] lg:flex-[3] bg-[#00f5ff] border-[4px] border-black relative group p-4 md:p-6 overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                        <div className="absolute top-2 md:top-4 left-2 md:left-4 font-black uppercase text-[8px] md:text-xs">Sales Volume</div>
                                        <div className="h-full flex items-end justify-around pt-6 md:pt-8 gap-1 md:gap-2">
                                            {[40, 70, 45, 90, 65, 80, 55, 95].map((h, i) => (
                                                <motion.div 
                                                    key={i}
                                                    initial={{ height: 0 }}
                                                    whileInView={{ height: `${h}%` }}
                                                    transition={{ delay: 0.5 + (i * 0.1), duration: 1, type: "spring" }}
                                                    className={`w-full bg-white border-[2px] md:border-[3px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${i > 4 ? 'hidden sm:block' : ''}`}
                                                ></motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right Panel Cards - Simplified for mobile */}
                                    <div className="flex-1 flex flex-row lg:flex-col gap-3 md:gap-4 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 no-scrollbar">
                                        <motion.div 
                                            whileHover={{ x: -5 }} 
                                            className="min-w-[120px] lg:min-w-0 flex-1 h-20 md:h-24 bg-[#ff5cd3] border-[3px] md:border-[4px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-3 md:p-4 relative overflow-hidden"
                                        >
                                            <div className="font-black text-white text-[8px] md:text-[10px] uppercase">Orders</div>
                                            <div className="font-black text-white text-xl md:text-2xl tracking-tighter">1,284</div>
                                        </motion.div>
                                        <motion.div 
                                            whileHover={{ x: -5 }} 
                                            className="min-w-[120px] lg:min-w-0 flex-1 h-20 md:h-24 bg-[#ffeb00] border-[3px] md:border-[4px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-3 md:p-4"
                                        >
                                            <div className="font-black text-black text-[8px] md:text-[10px] uppercase">Profit</div>
                                            <div className="font-black text-black text-xl md:text-2xl tracking-tighter">₹42.5K</div>
                                        </motion.div>
                                        <motion.div 
                                            whileHover={{ x: -5 }} 
                                            className="hidden sm:block min-w-[120px] lg:min-w-0 flex-1 h-20 md:h-24 bg-white border-[3px] md:border-[4px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-3 md:p-4"
                                        >
                                            <div className="font-black text-black/30 text-[8px] md:text-[10px] uppercase">Cust</div>
                                            <div className="font-black text-black text-xl md:text-2xl tracking-tighter">842</div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Animated Mouse Cursor Simulation - Hidden on small mobile */}
                        <motion.div 
                            animate={{ 
                                x: [50, 200, 150, 300, 50], 
                                y: [50, 150, 250, 100, 50],
                            }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute pointer-events-none z-50 text-black drop-shadow-lg hidden sm:block"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="black" strokeWidth="2">
                                <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                            </svg>
                        </motion.div>
                    </motion.div>

                    {/* Stat Overlay - Adjusted for mobile */}
                    <motion.div 
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.6, type: "spring" }}
                        className="absolute bottom-[-20px] md:bottom-[-40px] right-2 md:right-[-20px] bg-white border-[3px] md:border-[4px] border-black p-3 md:p-6 flex items-center space-x-3 md:space-x-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] rotate-3 z-30"
                    >
                        <div className="w-10 h-10 md:w-14 md:h-14 bg-[#27c93f] border-2 md:border-3 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <TrendingUp size={20} className="text-white md:hidden" />
                            <TrendingUp size={32} className="text-white hidden md:block" />
                        </div>
                        <div className="text-left">
                            <div className="font-black text-lg md:text-3xl leading-none">+242% SALES</div>
                            <div className="text-[8px] md:text-xs font-black text-black/40 uppercase tracking-widest mt-0.5 md:mt-1">Growth via CloudHisaab</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-40 px-4 bg-white" id="features">
                <div className="max-w-7xl mx-auto">
                    <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={fadeIn} className="text-center mb-32">
                        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 italic">Super Powers</h2>
                        <div className="w-40 h-3 bg-[#ff5cd3] mx-auto border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <FeatureCard 
                            icon={<Zap size={40} />} 
                            title="Quick GST Billing" 
                            desc="Generate professional GST invoices in seconds. Support for thermal printers & barcodes." 
                            color="#00f5ff"
                        />
                        <FeatureCard 
                            icon={<Package size={40} />} 
                            title="Inventory Control" 
                            desc="Real-time stock tracking with low-stock alerts. Never run out of your best-sellers." 
                            color="#ff5cd3"
                        />
                        <FeatureCard 
                            icon={<BarChart3 size={40} />} 
                            title="Sales Analytics" 
                            desc="Detailed reports on profits, sales trends, and tax liabilities at your fingertips." 
                            color="#ffeb00"
                        />
                        <FeatureCard 
                            icon={<Users size={40} />} 
                            title="Customer Ledger" 
                            desc="Manage udhaar/credit with automated WhatsApp reminders for pending payments." 
                            color="#ffeb00"
                        />
                        <FeatureCard 
                            icon={<Shield size={40} />} 
                            title="Cloud Backup" 
                            desc="Your data is safe, secure, and backed up daily in the cloud. Access from anywhere." 
                            color="#00f5ff"
                        />
                        <FeatureCard 
                            icon={<TrendingUp size={40} />} 
                            title="Tally Export" 
                            desc="One-click export to Tally and other accounting software for easy filing." 
                            color="#ff5cd3"
                        />
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="bg-black py-40 px-4 border-y-[6px] border-black overflow-hidden" id="pricing">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={fadeIn}>
                        <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-4 italic">The Loot</h2>
                        <p className="text-white/40 font-black uppercase tracking-[0.3em] text-sm mb-32 italic">Choose your merchant path</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-0 max-w-6xl mx-auto items-stretch">
                        <PricingCard 
                            title="Starter" 
                            price="99" 
                            desc="Perfect for small retail shops starting out." 
                            features={['100 invoices/mo', 'Basic Inventory', 'Udhaar Ledger', '1 User Access']}
                            btnText="Choose Starter"
                            color="white"
                        />
                        <PricingCard 
                            title="Professional" 
                            price="299" 
                            desc="Ideal for growing businesses and supermarkets." 
                            features={['Unlimited Invoices', 'Advanced Inventory', 'Sales Analytics', 'WhatsApp Sharing', '3 Staff Accounts']}
                            btnText="Go Professional"
                            color="#ffeb00"
                            featured={true}
                        />
                        <PricingCard 
                            title="Yearly" 
                            price="250" 
                            desc="Best value for long-term growth." 
                            features={['Everything in Pro', 'Billed ₹3,000/yr', 'Priority Support', 'Barcode Support', 'Multi-Store Ready']}
                            btnText="Go Yearly"
                            color="#00f5ff"
                        />
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-[#f3f4f6] py-40 px-4 border-b-[6px] border-black" id="faq">
                <div className="max-w-3xl mx-auto">
                    <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={fadeIn} className="text-center mb-24">
                        <h2 className="text-6xl md:text-7xl font-black uppercase tracking-tighter italic">Curious Minds</h2>
                    </motion.div>
                    <div className="space-y-6">
                        <FaqItem q="Is my business data safe?" a="Absolutely. We use industry-standard encryption and perform daily cloud backups. Your business data is 100% private and secure." />
                        <FaqItem q="Can I use it on my phone?" a="Yes! CloudHisaab is fully responsive. You can manage your shop from any smartphone, tablet, or PC with an internet connection." />
                        <FaqItem q="Do I need internet to bill?" a="You need an active connection to sync data and generate GST reports, but our lightweight design ensures it works even on 3G/4G speeds." />
                        <FaqItem q="Can I export data to Tally?" a="Yes, you can export all your sales and purchase data in formats compatible with Tally and other accounting software." />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#ff5cd3] py-40 px-4 border-b-[10px] border-black text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.h2 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", damping: 10 }}
                        className="text-7xl md:text-9xl font-black text-black uppercase tracking-tighter leading-[0.8] mb-16 italic"
                    >
                        Ready To <br /> Boss Up?
                    </motion.h2>
                    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                        <motion.a 
                            href="https://app.cloudhisab.in"
                            whileHover={{ scale: 1.05, x: -4, y: -4 }}
                            whileTap={{ scale: 0.95 }}
                            className="brutal-btn bg-black text-white text-2xl px-16 py-5 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] inline-block"
                        >
                            Start Free Trial
                        </motion.a>
                        <motion.button 
                            whileHover={{ scale: 1.05, x: -4, y: -4 }}
                            whileTap={{ scale: 0.95 }}
                            className="brutal-btn bg-white text-black text-2xl px-16 py-5"
                        >
                            Talk To Us
                        </motion.button>
                    </div>
                    <p className="mt-12 font-black text-xs uppercase tracking-[0.4em] opacity-40">No credit card required. No games. No limits.</p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white py-16 px-6 border-b-[30px] border-[#ff5cd3]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="text-center md:text-left">
                        <span className="font-black text-4xl uppercase tracking-tighter italic">CloudHisaab</span>
                        <div className="flex flex-col gap-1 mt-4 opacity-40 font-bold text-xs uppercase tracking-widest">
                            <div className="flex items-center justify-center md:justify-start gap-2">
                                <Cloud size={14} /> support@cloudhisab.in
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-2">
                                <Phone size={14} /> +91 9419403158
                            </div>
                            <div className="mt-1">Jammu & Kashmir, India</div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-12 font-black text-xs uppercase tracking-[0.3em] opacity-40">
                        {['Privacy', 'Terms', 'Support', 'API'].map((l) => (
                            <a key={l} href="#" className="hover:opacity-100 hover:text-black transition-all">{l}</a>
                        ))}
                    </div>
                    <div className="font-black text-xs uppercase tracking-[0.3em] opacity-40">
                        © 2026 CloudHisaab.
                    </div>
                </div>
            </footer>
        </div>
    );
}

function FeatureCard({ icon, title, desc, color }: { icon: any, title: string, desc: string, color: string }) {
    return (
        <motion.div 
            variants={fadeIn}
            whileHover={{ y: -10, x: -10 }}
            className="bg-white border-[4px] border-black p-12 flex flex-col h-full shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all"
        >
            <div className="w-20 h-20 border-[4px] border-black flex items-center justify-center mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]" style={{ backgroundColor: color }}>
                {icon}
            </div>
            <h3 className="text-3xl font-black uppercase mb-6 italic tracking-tight">{title}</h3>
            <p className="font-bold text-black/60 leading-tight text-lg uppercase italic">{desc}</p>
        </motion.div>
    );
}

function PricingCard({ title, price, desc, features, btnText, color, featured = false }: any) {
    return (
        <motion.div 
            variants={fadeIn}
            whileHover={{ y: featured ? -5 : -15, scale: featured ? 1.05 : 1 }}
            className={`border-[4px] border-black p-12 flex flex-col text-left transition-all ${featured ? 'scale-105 relative z-10 border-[6px] shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]' : 'shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]'}`}
            style={{ backgroundColor: color }}
        >
            {featured && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#ff5cd3] text-white px-8 py-2 border-[4px] border-black text-xs font-black uppercase tracking-[0.3em] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    Most Popular
                </div>
            )}
            <h3 className="font-black text-4xl uppercase mb-3 italic tracking-tighter">{title}</h3>
            <p className="font-black text-black/40 text-sm mb-12 uppercase italic leading-tight">{desc}</p>
            <div className="text-7xl font-black mb-16 tracking-tighter italic">₹{price}<span className="text-lg opacity-40">/mo</span></div>
            <ul className="space-y-6 flex-grow mb-16 font-black text-xs uppercase tracking-widest">
                {features.map((f: string, i: number) => (
                    <li key={i} className="flex items-center gap-4">
                        <CheckCircle2 size={20} className={title === 'Hustler' ? 'text-[#27c93f]' : 'text-black'} />
                        <span>{f}</span>
                    </li>
                ))}
            </ul>
            <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`brutal-btn w-full text-lg py-5 italic ${featured ? 'bg-black text-white' : 'bg-white text-black'}`}
            >
                {btnText}
            </motion.button>
        </motion.div>
    );
}

function FaqItem({ q, a }: { q: string, a: string }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.div variants={fadeIn} className="border-[4px] border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-8 text-left flex justify-between items-center font-black uppercase text-lg tracking-widest italic"
            >
                <span>{q}</span>
                <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
                    <ChevronRight size={24} />
                </motion.div>
            </button>
            {isOpen && (
                <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="p-8 pt-0 font-black text-black/50 border-t-[4px] border-black bg-slate-50 text-base leading-relaxed uppercase italic"
                >
                    {a}
                </motion.div>
            )}
        </motion.div>
    );
}

function FileIcon() {
    return (
        <svg width="100" height="120" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
            <path d="M10 0H50L80 30V90C80 95.5228 75.5228 100 70 100H10C4.47715 100 0 95.5228 0 90V10C0 4.47715 4.47715 0 10 0Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M10 0H50L80 30V90C80 95.5228 75.5228 100 70 100H10C4.47715 100 0 95.5228 0 90V10C0 4.47715 4.47715 0 10 0Z" stroke="currentColor" strokeWidth="4" />
            <path d="M50 0V30H80" stroke="currentColor" strokeWidth="4" />
            <path d="M20 50H60M20 65H60M20 80H40" stroke="currentColor" strokeWidth="4" />
        </svg>
    );
}

function TagIcon() {
    return (
        <svg width="100" height="100" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
            <path d="M40 0L80 40L40 80L0 40L40 0Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M40 0L80 40L40 80L0 40L40 0Z" stroke="currentColor" strokeWidth="4" />
            <circle cx="40" cy="40" r="10" stroke="currentColor" strokeWidth="4" />
        </svg>
    );
}
