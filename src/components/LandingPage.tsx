"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FileText, Store, Package, IndianRupee, PieChart, Users,
    ShieldCheck, Smartphone, CheckCircle2, XCircle, ArrowRight,
    Calculator, Activity, Menu, X, ChevronRight, MessageCircle, BarChart3,
    Clock, Cloud
} from 'lucide-react';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

export default function LandingPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('dashboard');

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 border-none outline-none selection:bg-brand-200 selection:text-brand-900">

            {/* Navbar */}
            <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <a href="#" className="flex items-center">
                            <img src="/logo1.png" alt="CloudHisaab Logo" className="h-16 w-auto" />
                        </a>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#features" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Features</a>
                            <a href="#pricing" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Pricing</a>
                            <a href="#faq" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">FAQ</a>
                            <a href="https://app.cloudhisab.in" className="inline-block bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50">
                                Start Free Trial
                            </a>
                        </div>

                        {/* Mobile Nav Toggle */}
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-slate-900">
                                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-b border-slate-200">
                        <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
                            <a href="#features" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-slate-600 font-medium hover:bg-slate-50 rounded-lg">Features</a>
                            <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-slate-600 font-medium hover:bg-slate-50 rounded-lg">Pricing</a>
                            <a href="#faq" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-slate-600 font-medium hover:bg-slate-50 rounded-lg">FAQ</a>
                            <a href="https://app.cloudhisab.in" className="block text-center bg-brand-600 w-full mt-4 text-white px-6 py-3 rounded-xl font-medium shadow-md">
                                Start Free Trial
                            </a>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 overflow-hidden relative">
                {/* Background Gradients */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-400/20 blur-3xl opacity-50" />
                <div className="absolute top-40 left-0 -ml-20 w-72 h-72 rounded-full bg-accent-500/10 blur-3xl opacity-50" />

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center">

                        <motion.div variants={fadeIn} className="inline-flex items-center space-x-2 bg-brand-50 border border-brand-100 px-4 py-2 rounded-full mb-8 shadow-sm">
                            <span className="flex h-2 w-2 rounded-full bg-brand-600"></span>
                            <span className="text-sm font-semibold text-brand-700">Made for Indian Businesses</span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6 max-w-4xl">
                            Run Smarter<br className="hidden sm:block" />
                            <span className="text-gradient">Without Complexity.</span>
                        </motion.h1>

                        <motion.p variants={fadeIn} className="text-lg lg:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
                            Your Complete Cloud Billing & Business Management Solution. Designed for shopkeepers, retailers, and small businesses. Generate GST invoices, manage stock, and track dues from any device.
                        </motion.p>

                        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <a href="https://app.cloudhisab.in" className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 flex items-center justify-center space-x-2 group">
                                <span>Start 7-Day Free Trial</span>
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <button className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-sm flex items-center justify-center space-x-2">
                                <Store size={20} className="text-brand-600" />
                                <span>See How It Works</span>
                            </button>
                        </motion.div>

                        <motion.p variants={fadeIn} className="mt-6 text-sm text-slate-500 flex items-center space-x-2">
                            <CheckCircle2 size={16} className="text-accent-500" />
                            <span>No credit card required. Cancel anytime.</span>
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Dashboard Preview / The Output */}
            <section className="pb-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="rounded-2xl lg:rounded-[2rem] border border-slate-200/60 bg-white shadow-2xl overflow-hidden"
                    >
                        <div className="bg-slate-100 border-b border-slate-200 p-4 flex items-center space-x-2">
                            <div className="flex space-x-2 border-r border-slate-300 pr-4 mr-4">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="flex px-4 py-1.5 bg-white rounded-md text-xs font-medium text-slate-500 shadow-sm w-full max-w-sm overflow-hidden items-center justify-center space-x-2">
                                <span>app.cloudhisab.in/dashboard</span>
                            </div>
                        </div>
                        {/* Pseudo App Interface */}
                        <div className="p-4 md:p-10 flex flex-col lg:grid lg:grid-cols-4 gap-6 bg-slate-50 min-h-[650px] lg:min-h-0 lg:h-[520px]">
                            {/* Navigation / Sidebar */}
                            <div className="flex flex-row overflow-x-auto lg:overflow-visible lg:flex-col space-x-2 lg:space-x-0 lg:space-y-2 font-medium text-slate-500 pb-2 lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                {['dashboard', 'billing', 'inventory', 'customers', 'reports'].map((tab) => {
                                    const icons: Record<string, any> = {
                                        dashboard: <Activity size={20} className="shrink-0" />,
                                        billing: <FileText size={20} className="shrink-0" />,
                                        inventory: <Package size={20} className="shrink-0" />,
                                        customers: <Users size={20} className="shrink-0" />,
                                        reports: <PieChart size={20} className="shrink-0" />
                                    };
                                    return (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`flex items-center space-x-2 lg:space-x-3 p-2.5 lg:p-3 rounded-lg capitalize transition-all text-left outline-none whitespace-nowrap ${activeTab === tab ? 'bg-brand-50 text-brand-700 shadow-sm' : 'hover:bg-slate-100 hover:text-slate-900'}`}
                                        >
                                            {icons[tab]} <span className="text-sm lg:text-base">{tab}</span>
                                        </button>
                                    );
                                })}
                            </div>
                            {/* Main Content */}
                            <div className="lg:col-span-3 space-y-6 relative overflow-x-hidden min-h-[400px]">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="h-full flex flex-col"
                                >
                                    {activeTab === 'dashboard' && (
                                        <div className="space-y-6">
                                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 sm:gap-0">
                                                <div>
                                                    <h3 className="text-xl md:text-2xl font-bold tracking-tight">Today's Overview</h3>
                                                    <p className="text-slate-500 text-xs md:text-sm mt-1">October 24, 2024</p>
                                                </div>
                                                <button className="bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm w-full sm:w-auto">+ New Invoice</button>
                                            </div>
                                            {/* Stats Cards */}
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                {[
                                                    { label: "Today's Sales", val: "₹45,200", trend: "+12%", bg: "bg-white", text: "text-slate-900" },
                                                    { label: "Net Profit", val: "₹12,450", trend: "+8%", bg: "bg-brand-600", text: "text-white" },
                                                    { label: "Bills Raised", val: "84", trend: "+5%", bg: "bg-white", text: "text-slate-900" },
                                                    { label: "Pending Dues", val: "₹8,300", trend: "-2%", bg: "bg-white", text: "text-slate-900" }
                                                ].map((stat, i) => (
                                                    <div key={i} className={`p-4 rounded-2xl border ${stat.bg === 'bg-white' ? 'border-slate-200' : 'border-transparent'} shadow-sm ${stat.bg} ${stat.text}`}>
                                                        <p className={`text-xs font-semibold uppercase tracking-wider ${stat.bg === 'bg-white' ? 'text-slate-500' : 'text-brand-100'} mb-2`}>{stat.label}</p>
                                                        <h4 className="text-xl md:text-2xl font-bold">{stat.val}</h4>
                                                    </div>
                                                ))}
                                            </div>
                                            {/* Graph Area */}
                                            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm h-52 flex flex-col justify-end relative overflow-hidden">
                                                <div className="absolute top-6 left-6 font-semibold">Weekly Revenue Trend</div>
                                                <div className="flex items-end justify-between space-x-2 h-32">
                                                    {[40, 60, 45, 80, 50, 90, 70].map((h, i) => (
                                                        <div key={i} className="w-full bg-brand-100 hover:bg-brand-200 rounded-t-md transition-all relative group" style={{ height: `${h}%` }}>
                                                            <div className="absolute -top-4 w-full h-full bg-gradient-to-t from-brand-600 to-brand-400 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-md" />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'billing' && (
                                        <div className="space-y-6">
                                            <div className="flex flex-row justify-between items-center gap-2">
                                                <h3 className="text-xl md:text-2xl font-bold tracking-tight">Invoices</h3>
                                                <button className="bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm whitespace-nowrap">+ Create Invoice</button>
                                            </div>
                                            <div className="bg-white border border-slate-200 rounded-2xl overflow-x-auto shadow-sm">
                                                <table className="w-full text-left">
                                                    <thead className="bg-slate-50 border-b border-slate-200 text-sm text-slate-500">
                                                        <tr>
                                                            <th className="p-4 font-semibold">Inv #</th>
                                                            <th className="p-4 font-semibold">Customer</th>
                                                            <th className="p-4 font-semibold">Amount</th>
                                                            <th className="p-4 font-semibold">Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="text-sm">
                                                        {[
                                                            { id: "INV-1042", name: "Rahul General Store", amt: "₹4,500", stat: "Paid", color: "text-green-600 bg-green-50" },
                                                            { id: "INV-1041", name: "Sharma Electronics", amt: "₹12,800", stat: "Pending", color: "text-yellow-600 bg-yellow-50" },
                                                            { id: "INV-1040", name: "Riya Boutique", amt: "₹2,100", stat: "Paid", color: "text-green-600 bg-green-50" },
                                                            { id: "INV-1039", name: "Ali Hardware", amt: "₹8,450", stat: "Paid", color: "text-green-600 bg-green-50" },
                                                        ].map((inv, i) => (
                                                            <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                                                                <td className="p-4 font-medium text-slate-900">{inv.id}</td>
                                                                <td className="p-4 text-slate-600">{inv.name}</td>
                                                                <td className="p-4 font-medium text-slate-900">{inv.amt}</td>
                                                                <td className="p-4"><span className={`px-2 py-1 rounded-md text-xs font-semibold ${inv.color}`}>{inv.stat}</span></td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'inventory' && (
                                        <div className="space-y-6">
                                            <div className="flex flex-row justify-between items-center gap-2">
                                                <h3 className="text-xl md:text-2xl font-bold tracking-tight">Stock List</h3>
                                                <button className="bg-white text-slate-700 border border-slate-200 px-4 py-2 rounded-lg text-sm font-semibold shadow-sm">Export</button>
                                            </div>
                                            <div className="bg-white border border-slate-200 rounded-2xl p-2 shadow-sm flex flex-col md:flex-row gap-2">
                                                <div className="p-3 bg-slate-50 rounded-xl flex-1 border border-slate-100 flex items-center justify-between">
                                                    <div>
                                                        <p className="text-xs font-semibold text-slate-500">Rice 5kg Bag</p>
                                                        <p className="text-slate-900 font-bold mt-1">42 Units</p>
                                                    </div>
                                                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                                </div>
                                                <div className="p-3 bg-slate-50 rounded-xl flex-1 border border-slate-100 flex items-center justify-between">
                                                    <div>
                                                        <p className="text-xs font-semibold text-slate-500">Aashirvaad Atta</p>
                                                        <p className="text-slate-900 font-bold mt-1">5 Units</p>
                                                    </div>
                                                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                                </div>
                                                <div className="p-3 bg-slate-50 rounded-xl flex-1 border border-slate-100 flex items-center justify-between">
                                                    <div>
                                                        <p className="text-xs font-semibold text-slate-500">Tata Salt 1kg</p>
                                                        <p className="text-slate-900 font-bold mt-1">112 Units</p>
                                                    </div>
                                                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                                </div>
                                            </div>
                                            <div className="bg-red-50 text-red-700 p-4 rounded-xl text-sm flex items-center shadow-sm">
                                                <XCircle size={18} className="mr-2 shrink-0" />
                                                <strong>Low Stock Alert:</strong>&nbsp;Aashirvaad Atta is running low. Reorder soon.
                                            </div>
                                        </div>
                                    )}

                                    {(activeTab === 'customers' || activeTab === 'reports') && (
                                        <div className="h-full flex flex-col items-center justify-center text-slate-400 pt-16">
                                            <Cloud size={48} className="mb-4 text-slate-200" />
                                            <p className="text-lg font-medium text-slate-500 capitalize">Explore {activeTab} seamlessly.</p>
                                            <p className="text-sm mt-2 text-center max-w-sm">Sign up for the trial to see the real deal, complete with ledgers, GST reports and more.</p>
                                        </div>
                                    )}

                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* The Problem & Solution */}
            <section className="py-20 bg-white" id="features">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Running a business means juggling too many things manually.</h2>
                        <p className="text-lg text-slate-600">Writing bills by hand, losing track of profits, unexpected low stock, and struggling with GST filing. It doesn't have to be this hard.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<FileText className="text-brand-600" size={28} />}
                            title="Fast & Professional Billing"
                            desc="Create GST invoices in under 30 seconds. Support for Cash, UPI, Card, and Partial payments."
                        />
                        <FeatureCard
                            icon={<FileText className="text-brand-600" size={28} />}
                            title="Automatic PDF Invoices"
                            desc="Every invoice automatically converts to a professional PDF with itemised breakdown and GST splits."
                        />
                        <FeatureCard
                            icon={<BarChart3 className="text-brand-600" size={28} />}
                            title="Live Business Dashboard"
                            desc="Know exactly how your business is doing right now. Track daily sales, profits, and expenses."
                        />
                        <FeatureCard
                            icon={<Package className="text-brand-600" size={28} />}
                            title="Smart Inventory Management"
                            desc="Never run out of stock. Alerts when stock is low, and full history of purchases and sales."
                        />
                        <FeatureCard
                            icon={<Users className="text-brand-600" size={28} />}
                            title="Customer Ledger & Outstanding"
                            desc="Track customers who owe you money. Accept advances, partial payments and know pending dues."
                        />
                        <FeatureCard
                            icon={<Calculator className="text-brand-600" size={28} />}
                            title="GST-Ready Reports (GSTR-1)"
                            desc="File GST returns without stress. B2B, B2C, HSN summaries, and tax slab breakdowns ready in seconds."
                        />
                    </div>
                </div>
            </section>

            {/* Target Audience */}
            <section className="py-20 bg-slate-50 relative border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Is It For?</h2>
                        <p className="text-lg text-slate-600">Built for a wide variety of Indian SMEs</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 text-center max-w-4xl mx-auto">
                        {['Retail Shops', 'Medical / Pharma', 'Hardware & Electronics', 'Garments & Textiles', 'Wholesalers & Distributors', 'Service Shops'].map((type, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow font-semibold text-slate-800 flex items-center justify-center">
                                {type}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Makes CloudHisaab Different?</h2>
                    </div>

                    <div className="overflow-x-auto border-x border-t border-slate-200 rounded-2xl shadow-sm">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-200">
                                    <th className="p-4 md:p-6 font-semibold text-slate-900 w-1/2 rounded-tl-2xl">Feature</th>
                                    <th className="p-4 md:p-6 font-semibold text-slate-500 text-center w-1/4">Traditional Software</th>
                                    <th className="p-4 md:p-6 font-semibold text-brand-700 bg-brand-50 text-center w-1/4 rounded-tr-2xl">CloudHisaab</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    "Works on any device (Phone/PC)",
                                    "No installation needed",
                                    "Auto PDF invoices",
                                    "Real-time inventory",
                                    "Customer ledger built-in",
                                    "GSTR-1 ready reports",
                                    "Multi-staff with roles",
                                    "Data 100% safe in cloud"
                                ].map((feature, i) => (
                                    <tr key={i} className="border-b border-slate-200 hover:bg-slate-50">
                                        <td className="p-4 md:p-6 font-medium text-slate-800">{feature}</td>
                                        <td className="p-4 md:p-6 text-center"><XCircle className="mx-auto text-slate-300" size={24} /></td>
                                        <td className="p-4 md:p-6 text-center bg-brand-50/50"><CheckCircle2 className="mx-auto text-accent-500" size={24} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>



            {/* Testimonials */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <TestimonialCard
                            quote="Pehle haath se bill likhte the, ab 30 second mein PDF aa jaata hai customer ko."
                            author="Retail shop owner"
                            location="Jammu"
                        />
                        <TestimonialCard
                            quote="GST report ke liye CA ko data dena bahut aasaan ho gaya."
                            author="Medical shop owner"
                            location="Srinagar"
                        />
                        <TestimonialCard
                            quote="Staff ko alag alag access de sakte hain — cashier ko sirf billing, manager ko sab kuch."
                            author="Wholesale distributor"
                            location="Delhi"
                        />
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 bg-white" id="pricing">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
                        <p className="text-lg text-slate-600">Choose the plan that fits your business needs. No hidden fees.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Monthly Plan */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all relative mt-4 md:mt-0"
                        >
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Monthly</h3>
                            <div className="text-slate-500 text-sm mb-6">₹299 billed monthly</div>
                            <div className="flex items-baseline mb-6">
                                <span className="text-4xl font-extrabold text-slate-900">₹299</span>
                                <span className="text-slate-500 ml-2">/ month</span>
                            </div>
                            <a href="https://app.cloudhisab.in" className="block w-full text-center bg-white border border-slate-200 hover:bg-slate-100 text-slate-900 font-bold py-3 px-4 rounded-xl transition-colors mb-8 shadow-sm">
                                Start Free Trial
                            </a>
                            <div className="space-y-4">
                                {[
                                    'Unlimited invoices',
                                    'Inventory management',
                                    'GST reports (GSTR-1)',
                                    'Customer ledger',
                                    'Team access (up to 3 users)'
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start">
                                        <CheckCircle2 className="text-brand-600 shrink-0 mr-3 mt-0.5" size={18} />
                                        <span className="text-slate-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* 6-Month Plan */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-3xl p-8 border-2 border-brand-400 shadow-xl relative md:-translate-y-4 z-10 transition-all"
                        >
                            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1 lg:translate-x-4">
                                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full border border-orange-200 shadow-sm">Save ₹120</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">6-Month</h3>
                            <div className="text-slate-500 text-sm mb-6">₹1,674 billed every 6 months</div>
                            <div className="flex items-baseline mb-6">
                                <span className="text-4xl font-extrabold text-slate-900">₹279</span>
                                <span className="text-slate-500 ml-2">/ month</span>
                            </div>
                            <a href="https://app.cloudhisab.in" className="block w-full text-center bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-md shadow-brand-500/20 mb-8">
                                Subscribe Now
                            </a>
                            <div className="space-y-4">
                                {[
                                    'Everything in Monthly',
                                    'Priority email support',
                                    'Bulk product import (Excel/CSV)',
                                    'Invoice PDF export',
                                    'Team access (up to 5 users)'
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start">
                                        <CheckCircle2 className="text-brand-600 shrink-0 mr-3 mt-0.5" size={18} />
                                        <span className="text-slate-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Yearly Plan */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl relative mt-4 md:mt-0 text-white transition-all"
                        >
                            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1 lg:translate-x-4">
                                <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">Best Value • Save ₹588</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Yearly</h3>
                            <div className="text-slate-400 text-sm mb-6">₹3,000 billed yearly</div>
                            <div className="flex items-baseline mb-6">
                                <span className="text-4xl font-extrabold text-white">₹250</span>
                                <span className="text-slate-400 ml-2">/ month</span>
                            </div>
                            <a href="https://app.cloudhisab.in" className="block w-full text-center bg-brand-500 hover:bg-brand-600 text-white font-bold py-3 px-4 rounded-xl transition-colors mb-8 shadow-lg shadow-brand-500/30">
                                Subscribe Now
                            </a>
                            <div className="space-y-4">
                                {[
                                    'Everything in 6-Month',
                                    'Dedicated account manager',
                                    'Advanced profit & expense reports',
                                    'Multi-branch support (coming soon)',
                                    'Unlimited team members'
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start">
                                        <CheckCircle2 className="text-brand-400 shrink-0 mr-3 mt-0.5" size={18} />
                                        <span className="text-slate-300">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white border-y border-slate-200" id="faq">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-6">
                        <FaqItem q="Do I need to install anything?" a="No. CloudHisaab works directly in your web browser — Chrome, Safari, Edge. Works on mobile too." />
                        <FaqItem q="What if my internet goes down?" a="Your previous data is saved. You can view recent invoices. Billing resumes the moment internet is back." />
                        <FaqItem q="Is my data safe?" a="Yes. Your data is stored on secure cloud servers with daily backups. No one else can access your business data." />
                        <FaqItem q="Will it help with GST filing?" a="Yes. The GSTR-1 report gives your CA everything they need — B2B/B2C split, HSN summary, tax slab breakdown." />
                        <FaqItem q="What if I already have product data in Excel?" a="Our team can help you import your existing product list. Just contact us." />
                    </div>
                </div>
            </section>

            {/* CTA & Footer */}
            <footer className="bg-slate-900 pt-20 pb-10 text-slate-400">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-brand-600 rounded-3xl p-10 md:p-16 text-center text-white mb-20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 blur-3xl rounded-full" />
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Get Started in 2 Minutes</h2>
                        <p className="text-lg text-brand-100 mb-10 max-w-2xl mx-auto relative z-10">Sign up, add details, add products, and start billing. No IT team needed. If you know how to use WhatsApp, you can use CloudHisaab.</p>
                        <a href="https://app.cloudhisab.in" className="inline-block bg-white text-brand-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-50 transition-colors shadow-lg relative z-10">
                            Create Your Free Account
                        </a>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 mb-10 border-b border-slate-800 pb-10">
                        <div>
                            <div className="flex items-center mb-6">
                                <img src="/logo.png" alt="CloudHisaab Logo" className="h-12 w-auto" />
                            </div>
                            <p className="mb-4 text-slate-400 max-w-sm">Aapka business, cloud par. The smart, fast, and simple way to manage billing and inventory anywhere.</p>
                        </div>
                        <div className="md:text-right space-y-3">
                            <h4 className="text-white font-semibold text-lg mb-4">Contact Us</h4>
                            <p>🌐 cloudhisab.in</p>
                            <p>📧 support@cloudhisab.in</p>
                            <p>📞 +91 9419403158</p>
                            <p>📍 Jammu & Kashmir, India</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                        <p>© {new Date().getFullYear()} CloudHisaab. All rights reserved.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white transition-colors">Privacy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

// Subcomponents

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:shadow-xl hover:shadow-brand-500/5 transition-all"
        >
            <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-slate-600 leading-relaxed">{desc}</p>
        </motion.div>
    )
}


function TestimonialCard({ quote, author, location }: any) {
    return (
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative">
            <MessageCircle className="text-brand-100 absolute top-8 right-8" size={32} />
            <p className="text-lg italic text-slate-700 mb-6 relative z-10">"{quote}"</p>
            <div className="flex items-center">
                <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center text-brand-700 font-bold mr-4">
                    {author.charAt(0)}
                </div>
                <div>
                    <h4 className="font-bold text-slate-900">{author}</h4>
                    <p className="text-sm text-slate-500">{location}</p>
                </div>
            </div>
        </div>
    )
}

function FaqItem({ q, a }: { q: string, a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all hover:border-brand-300 bg-slate-50">
            <button
                className="w-full px-6 py-5 text-left font-bold text-slate-900 flex justify-between items-center bg-white"
                onClick={() => setOpen(!open)}
            >
                <span>{q}</span>
                <ChevronRight className={`transition-transform text-slate-400 ${open ? 'rotate-90' : ''}`} />
            </button>
            {open && (
                <div className="px-6 pb-5 pt-2 text-slate-600 border-t border-slate-100">
                    {a}
                </div>
            )}
        </div>
    )
}
