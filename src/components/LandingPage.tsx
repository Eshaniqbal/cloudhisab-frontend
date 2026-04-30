"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants, useMotionValue, useMotionTemplate } from 'framer-motion';
import {
    CheckCircle2, ChevronRight, Menu, X, Cloud, Zap, Package, BarChart3, TrendingUp, Users, Shield, Phone, ArrowRight, Play
} from 'lucide-react';

const fadeIn: Variants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

import Navbar from './Navbar';

export default function LandingPage() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ clientX, clientY }: React.MouseEvent) {
        mouseX.set(clientX);
        mouseY.set(clientY);
    }

    return (
        <div 
            onMouseMove={handleMouseMove}
            className="min-h-screen bg-[#FCFBF4] font-sans text-slate-900 overflow-x-hidden relative group"
        >
            {/* Global Interactive Fixed Grid Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {/* Base faint grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_50%,transparent_100%)]"></div>

                {/* Interactive highlight grid */}
                <motion.div
                    className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e530_1px,transparent_1px),linear-gradient(to_bottom,#4f46e530_1px,transparent_1px)] bg-[size:40px_40px] opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                        WebkitMaskImage: useMotionTemplate`
                            radial-gradient(
                                400px circle at ${mouseX}px ${mouseY}px,
                                black,
                                transparent 80%
                            )
                        `,
                        maskImage: useMotionTemplate`
                            radial-gradient(
                                400px circle at ${mouseX}px ${mouseY}px,
                                black,
                                transparent 80%
                            )
                        `,
                    }}
                />
            </div>

            <div className="relative z-10">
                <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 inset-x-0 h-[800px] bg-gradient-to-b from-indigo-50/80 to-transparent -z-10" />
                <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-3xl -z-10" 
                />
                <motion.div 
                    animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-1/3 left-0 -translate-y-1/2 -translate-x-1/3 w-[500px] h-[500px] bg-indigo-200/40 rounded-full blur-3xl -z-10" 
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                    {/* Floating Animated Badges */}
                    <motion.div 
                        animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-10 left-0 xl:-left-10 hidden lg:flex items-center gap-3 bg-white/80 backdrop-blur-sm p-3 rounded-2xl shadow-xl shadow-indigo-100/50 border border-slate-100 z-10"
                    >
                        <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
                            <Package size={20} />
                        </div>
                        <div className="text-left">
                            <div className="text-xs text-slate-400 font-medium">Stock Update</div>
                            <div className="text-sm font-bold text-slate-700">+150 Items</div>
                        </div>
                    </motion.div>

                    <motion.div 
                        animate={{ y: [0, 25, 0], x: [0, -10, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-20 right-0 xl:-right-10 hidden lg:flex items-center gap-3 bg-white/80 backdrop-blur-sm p-3 rounded-2xl shadow-xl shadow-purple-100/50 border border-slate-100 z-10"
                    >
                        <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                            <CheckCircle2 size={20} />
                        </div>
                        <div className="text-left">
                            <div className="text-xs text-slate-400 font-medium">Invoice #1042</div>
                            <div className="text-sm font-bold text-slate-700">₹4,250 Paid</div>
                        </div>
                    </motion.div>

                    <motion.div 
                        animate={{ y: [0, -15, 0], rotate: [0, -5, 0], scale: [1, 1.05, 1] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute top-24 right-10 hidden lg:flex items-center justify-center w-14 h-14 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl shadow-amber-100/50 border border-slate-100 text-amber-500 z-10"
                    >
                        <TrendingUp size={24} />
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="max-w-4xl mx-auto relative z-20"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium mb-8">
                            <span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
                            CloudHisaab 2.0 is now live
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-8 leading-[1.1]">
                            Smart billing & inventory for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">modern businesses</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                            The all-in-one cloud platform designed for retailers and distributors to manage GST billing, stock, and customer ledgers seamlessly.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="https://app.cloudhisab.in/register" className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-medium flex items-center justify-center gap-2 hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 group">
                                Start your free trial
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#demo" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-slate-50 transition-all duration-300">
                                <Play size={18} className="text-slate-400" />
                                Watch Demo
                            </a>
                        </div>
                        <p className="mt-5 text-sm text-slate-500">No credit card required • 7-day free trial</p>
                    </motion.div>

                    {/* Dashboard Preview */}
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-20 relative mx-auto max-w-5xl"
                    >
                        <motion.div 
                            animate={{ scale: [1, 1.02, 1], opacity: [0.15, 0.25, 0.15] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20"
                        ></motion.div>
                        <div className="relative rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden flex flex-col h-[400px] sm:h-[500px] md:h-[600px]">
                            {/* Browser Header */}
                            <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                                </div>
                                <div className="mx-auto bg-white border border-slate-200 rounded-md px-3 py-1 text-xs text-slate-400 font-medium w-1/2 text-center truncate shadow-sm">
                                    app.cloudhisab.in/dashboard
                                </div>
                            </div>
                            
                            {/* App Interface Mockup */}
                            <div className="flex-1 flex bg-slate-50/50 relative">
                                
                                {/* Animated Cursor */}
                                <motion.div 
                                    animate={{ 
                                        x: [0, 250, 150, 350, 50, 0], 
                                        y: [0, 180, 280, 120, 60, 0],
                                    }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute pointer-events-none z-50 text-slate-800 drop-shadow-md hidden sm:block"
                                    style={{ top: "15%", left: "25%" }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                                    </svg>
                                </motion.div>

                                {/* Sidebar */}
                                <div className="w-16 md:w-56 bg-slate-50 border-r border-slate-200 p-4 hidden sm:flex flex-col gap-2 text-slate-600">
                                    <div className="flex items-center gap-2 mb-8 px-2 text-slate-900">
                                        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow-sm">C</div>
                                        <span className="font-bold hidden md:block">CloudHisaab</span>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 px-3 py-2 bg-white text-indigo-600 rounded-lg shadow-sm border border-slate-100">
                                        <BarChart3 size={18} />
                                        <span className="text-sm font-semibold hidden md:block">Dashboard</span>
                                    </div>
                                    <div className="flex items-center gap-3 px-3 py-2 hover:bg-white/60 rounded-lg transition-colors cursor-pointer">
                                        <Package size={18} />
                                        <span className="text-sm font-medium hidden md:block">Inventory</span>
                                    </div>
                                    <div className="flex items-center gap-3 px-3 py-2 hover:bg-white/60 rounded-lg transition-colors cursor-pointer">
                                        <Users size={18} />
                                        <span className="text-sm font-medium hidden md:block">Customers</span>
                                    </div>
                                    <div className="flex items-center gap-3 px-3 py-2 hover:bg-white/60 rounded-lg transition-colors cursor-pointer">
                                        <CheckCircle2 size={18} />
                                        <span className="text-sm font-medium hidden md:block">Invoices</span>
                                    </div>
                                </div>
                                
                                {/* Main Content */}
                                <div className="flex-1 p-6 md:p-8 flex flex-col gap-6 overflow-hidden">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <div className="text-xl font-bold text-slate-900 mb-1">Dashboard Overview</div>
                                            <div className="text-sm text-slate-500">Welcome back, Admin. Here's what's happening today.</div>
                                        </div>
                                        <motion.div 
                                            whileHover={{ scale: 1.05 }}
                                            animate={{ boxShadow: ["0px 0px 0px rgba(79,70,229,0)", "0px 0px 15px rgba(79,70,229,0.5)", "0px 0px 0px rgba(79,70,229,0)"] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium shadow-md cursor-pointer flex items-center gap-2"
                                        >
                                            <span className="text-lg leading-none">+</span> New Sale
                                        </motion.div>
                                    </div>
                                    
                                    {/* Stats Row */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {[
                                            { label: "Total Revenue", value: "₹1,24,500", trend: "+12.5%", color: "text-emerald-500" },
                                            { label: "Invoices Today", value: "142", trend: "+5.2%", color: "text-emerald-500" },
                                            { label: "Pending Dues", value: "₹12,400", trend: "-2.4%", color: "text-rose-500" },
                                            { label: "Items in Stock", value: "8,450", trend: "+1.1%", color: "text-emerald-500" }
                                        ].map((stat, i) => (
                                            <motion.div 
                                                key={i} 
                                                animate={{ y: [0, -4, 0] }}
                                                transition={{ duration: 4, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
                                                className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-1 hover:shadow-md transition-shadow relative overflow-hidden cursor-pointer"
                                            >
                                                <div className="text-xs font-medium text-slate-500">{stat.label}</div>
                                                <div className="text-xl md:text-2xl font-bold text-slate-900 mt-1">{stat.value}</div>
                                                <div className={`text-[10px] font-medium mt-1 ${stat.color}`}>{stat.trend} from last week</div>
                                            </motion.div>
                                        ))}
                                    </div>
                                    
                                    {/* Chart & Table Area */}
                                    <div className="flex-1 flex flex-col lg:flex-row gap-6 min-h-0">
                                        <div className="flex-[2] bg-white border border-slate-100 rounded-xl shadow-sm p-4 flex flex-col relative overflow-hidden">
                                            <div className="flex justify-between items-center mb-6">
                                                <div className="text-sm font-bold text-slate-900">Revenue (Last 7 Days)</div>
                                                <div className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">This Week</div>
                                            </div>
                                            <div className="flex-1 flex items-end justify-between gap-2 md:gap-4 px-2 pb-6 relative">
                                                {/* Chart Grid Lines */}
                                                <div className="absolute inset-0 flex flex-col justify-between pb-6 pointer-events-none">
                                                    {[1,2,3,4].map(l => <div key={l} className="w-full border-t border-slate-100 border-dashed"></div>)}
                                                </div>
                                                
                                                {[
                                                    { h: 30, d: "Mon" }, { h: 50, d: "Tue" }, { h: 40, d: "Wed" }, 
                                                    { h: 70, d: "Thu" }, { h: 55, d: "Fri" }, { h: 90, d: "Sat" }, { h: 65, d: "Sun" }
                                                ].map((bar, j) => (
                                                    <div key={j} className="w-full relative group h-full flex items-end z-10">
                                                        <motion.div 
                                                            initial={{ height: `${bar.h}%` }}
                                                            animate={{ height: [`${bar.h}%`, `${bar.h + 10}%`, `${bar.h}%`] }}
                                                            transition={{ duration: 3, repeat: Infinity, delay: j * 0.15, ease: "easeInOut" }}
                                                            className={`w-full rounded-t-md ${j === 5 ? 'bg-indigo-500 shadow-lg shadow-indigo-500/30' : 'bg-indigo-100 group-hover:bg-indigo-200'} transition-colors cursor-pointer`} 
                                                        />
                                                        <div className="absolute -bottom-6 w-full text-center text-[10px] sm:text-xs text-slate-400 font-medium">{bar.d}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex-1 bg-white border border-slate-100 rounded-xl shadow-sm p-4 hidden md:flex flex-col gap-4 overflow-hidden">
                                            <div className="flex justify-between items-center mb-2">
                                                <div className="text-sm font-bold text-slate-900">Recent Transactions</div>
                                                <div className="text-xs text-indigo-600 cursor-pointer font-medium">View All</div>
                                            </div>
                                            <div className="flex-1 overflow-y-auto pr-1 space-y-3">
                                                {[
                                                    { name: "Rahul Enterprises", time: "10 mins ago", amt: "+₹4,500", status: "Paid" },
                                                    { name: "Sharma Mart", time: "1 hour ago", amt: "+₹1,200", status: "Paid" },
                                                    { name: "Gupta Electronics", time: "3 hours ago", amt: "+₹8,500", status: "Pending" },
                                                    { name: "Verma Traders", time: "5 hours ago", amt: "+₹3,250", status: "Paid" },
                                                ].map((tx, k) => (
                                                    <div key={k} className="flex justify-between items-center border-b border-slate-50 pb-2 hover:bg-slate-50 p-1 rounded-lg transition-colors cursor-pointer">
                                                        <div className="flex gap-3 items-center">
                                                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs">
                                                                {tx.name.charAt(0)}
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <div className="text-xs font-bold text-slate-800">{tx.name}</div>
                                                                <div className="text-[10px] text-slate-500">{tx.time}</div>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col items-end">
                                                            <div className="text-xs font-bold text-slate-800">{tx.amt}</div>
                                                            <div className={`text-[10px] font-medium ${tx.status === 'Paid' ? 'text-emerald-500' : 'text-amber-500'}`}>{tx.status}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-transparent relative" id="features">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-3">Powerful Capabilities</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything you need to run your business</h3>
                        <p className="text-lg text-slate-600">Built with modern technology to give you speed, security, and simplicity.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard 
                            icon={<Zap size={24} className="text-indigo-600" />} 
                            title="Lightning Fast Billing" 
                            desc="Create GST invoices in seconds with barcode support. Print directly to thermal or laser printers." 
                        />
                        <FeatureCard 
                            icon={<Package size={24} className="text-purple-600" />} 
                            title="Smart Inventory" 
                            desc="Real-time stock tracking, low-stock alerts, and batch management. Never miss a sale." 
                        />
                        <FeatureCard 
                            icon={<BarChart3 size={24} className="text-blue-600" />} 
                            title="Actionable Analytics" 
                            desc="Understand your profit margins, top-selling items, and customer trends with visual reports." 
                        />
                        <FeatureCard 
                            icon={<Users size={24} className="text-emerald-600" />} 
                            title="Digital Ledger" 
                            desc="Manage 'udhaar' efficiently. Send automated payment reminders via WhatsApp to customers." 
                        />
                        <FeatureCard 
                            icon={<Shield size={24} className="text-rose-600" />} 
                            title="Bank-Grade Security" 
                            desc="Your data is encrypted and backed up automatically to the cloud every day. 100% safe." 
                        />
                        <FeatureCard 
                            icon={<TrendingUp size={24} className="text-amber-600" />} 
                            title="Easy Accounting" 
                            desc="Export your financial data to Tally or give your CA direct access for hassle-free tax filing." 
                        />
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-24 bg-transparent relative" id="pricing">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-3">Transparent Pricing</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Plans that scale with your business</h3>
                        <p className="text-lg text-slate-600">Start for free, upgrade when you need more power.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <PricingCard 
                            title="Starter" 
                            price="99" 
                            desc="For small retailers just getting started." 
                            features={['100 invoices/month', 'Basic Inventory', 'Customer Ledger', '1 User Account', 'Standard Support']}
                            btnText="Start Free Trial"
                        />
                        <PricingCard 
                            title="Professional" 
                            price="299" 
                            desc="For growing businesses needing more power." 
                            features={['Unlimited Invoices', 'Advanced Inventory', 'Sales Analytics', 'WhatsApp Integration', '3 User Accounts', 'Priority Support']}
                            btnText="Get Professional"
                            featured={true}
                        />
                        <PricingCard 
                            title="Enterprise" 
                            price="Custom" 
                            desc="For multi-store operations." 
                            features={['Everything in Professional', 'Multi-Store Management', 'API Access', 'Custom Integrations', 'Unlimited Users', 'Dedicated Account Manager']}
                            btnText="Contact Sales"
                        />
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-transparent" id="faq">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h3>
                        <p className="text-slate-600">Have a question? We're here to help.</p>
                    </div>
                    
                    <div className="space-y-4">
                        <FaqItem q="Is my business data secure?" a="Yes, we use bank-level 256-bit AES encryption. Your data is backed up daily across multiple secure cloud regions, ensuring it's never lost and always accessible only to you." />
                        <FaqItem q="Can I access CloudHisaab from my mobile?" a="Absolutely. Our web application is fully responsive, meaning you get the full experience on your smartphone, tablet, or desktop computer." />
                        <FaqItem q="Do I need a continuous internet connection?" a="While an internet connection is required for cloud syncing and generating live reports, the app has basic offline capabilities so you can continue billing during brief internet outages." />
                        <FaqItem q="How hard is it to migrate my current data?" a="It's incredibly easy. We provide simple Excel/CSV templates to import your products, inventory, and customer data in minutes. Our support team can also assist you with migration." />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden bg-transparent z-0 border-t border-slate-200/50">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-200/40 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/4 pointer-events-none"></div>
                
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-900 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to transform your retail business?</h2>
                    <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">Join thousands of smart retailers who have automated their billing, inventory, and accounting with CloudHisaab.</p>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="https://app.cloudhisab.in/register" className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300">
                            Start Your 7-Day Free Trial
                        </a>
                        <a href="https://wa.me/919419403158?text=Hello,%20I%20am%20interested%20in%20CloudHisaab" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-slate-700 rounded-full font-medium border border-slate-200 shadow-sm hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2">
                            Contact Sales
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div className="col-span-1 md:col-span-1">
                            <span className="font-bold text-xl text-white tracking-tight mb-4 block">CloudHisaab</span>
                            <p className="text-sm text-slate-500 mb-4">The smart cloud ERP for modern Indian retailers. Billing, inventory, and accounting made simple.</p>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Product</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-indigo-400 transition-colors">Features</a></li>
                                <li><a href="#" className="hover:text-indigo-400 transition-colors">Pricing</a></li>
                                <li><a href="#" className="hover:text-indigo-400 transition-colors">Changelog</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="/about" className="hover:text-indigo-400 transition-colors">About Us</a></li>
                                <li><a href="/contact" className="hover:text-indigo-400 transition-colors">Contact</a></li>
                                <li><a href="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
                                <li><a href="/terms" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Contact</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2"><Cloud size={16} /> support@cloudhisab.in</li>
                                <li className="flex items-center gap-2"><Phone size={16} /> +91 9419403158</li>
                                <li className="mt-2 text-slate-500">Jammu & Kashmir, India</li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center">
                        <p>© 2026 CloudHisaab. All rights reserved.</p>
                        <div className="flex gap-4 mt-4 md:mt-0">
                            {/* Social Icons could go here */}
                        </div>
                    </div>
                </div>
            </footer>
            </div>
        </div>
    );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <motion.div 
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 group"
        >
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
            <p className="text-slate-600 leading-relaxed">{desc}</p>
        </motion.div>
    );
}

function PricingCard({ title, price, desc, features, btnText, featured = false }: any) {
    return (
        <motion.div 
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            className={`rounded-2xl p-8 flex flex-col relative ${featured ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-500/20 scale-105 z-10' : 'bg-white border border-slate-200 text-slate-900 shadow-sm hover:shadow-md transition-shadow'}`}
        >
            {featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-400 to-orange-400 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-sm">
                    Most Popular
                </div>
            )}
            <h3 className={`text-xl font-semibold mb-2 ${featured ? 'text-indigo-100' : 'text-slate-900'}`}>{title}</h3>
            <p className={`text-sm mb-6 h-10 ${featured ? 'text-indigo-200' : 'text-slate-500'}`}>{desc}</p>
            <div className="mb-8">
                {price !== 'Custom' ? (
                    <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold">₹{price}</span>
                        <span className={`text-sm ${featured ? 'text-indigo-200' : 'text-slate-500'}`}>/month</span>
                    </div>
                ) : (
                    <div className="text-4xl font-bold">Custom</div>
                )}
            </div>
            
            <ul className="space-y-4 flex-grow mb-8">
                {features.map((f: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 size={18} className={`shrink-0 mt-0.5 ${featured ? 'text-indigo-300' : 'text-indigo-500'}`} />
                        <span className={featured ? 'text-indigo-50' : 'text-slate-600'}>{f}</span>
                    </li>
                ))}
            </ul>
            
            <button 
                className={`w-full py-3 rounded-lg font-medium transition-all ${
                    featured 
                        ? 'bg-white text-indigo-600 hover:bg-slate-50' 
                        : 'bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
            >
                {btnText}
            </button>
        </motion.div>
    );
}

function FaqItem({ q, a }: { q: string, a: string }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-slate-200 rounded-xl bg-white overflow-hidden">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
            >
                <span className="font-semibold text-slate-900">{q}</span>
                <ChevronRight size={20} className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-4 pt-2 text-slate-600"
                    >
                        {a}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
