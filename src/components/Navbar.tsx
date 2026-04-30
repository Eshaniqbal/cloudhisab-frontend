"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Navbar({ alwaysSolid = false }: { alwaysSolid?: boolean }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(alwaysSolid);

    useEffect(() => {
        if (alwaysSolid) return;
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [alwaysSolid]);

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || alwaysSolid ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <Link href="/" className="flex items-center">
                        <img src="/logo1.png" alt="CloudHisaab Logo" className="h-12 md:h-14 lg:h-16 w-auto object-contain" />
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/#features" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Features</Link>
                        <Link href="/#pricing" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Pricing</Link>
                        <Link href="/#faq" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">FAQ</Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <a href="https://app.cloudhisab.in/login" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Log in</a>
                        <a 
                            href="https://app.cloudhisab.in/register"
                            className="px-5 py-2.5 text-sm font-medium rounded-full text-white bg-slate-900 hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
                        >
                            Get Started
                        </a>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 p-2">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }} 
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden fixed top-[60px] left-0 w-full bg-white border-b border-slate-200 z-40 shadow-lg overflow-hidden"
                    >
                        <div className="p-4 flex flex-col space-y-4">
                            <Link href="/#features" className="px-4 py-2 text-slate-600 font-medium hover:bg-slate-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>Features</Link>
                            <Link href="/#pricing" className="px-4 py-2 text-slate-600 font-medium hover:bg-slate-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
                            <Link href="/#faq" className="px-4 py-2 text-slate-600 font-medium hover:bg-slate-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
                            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                                <a href="https://app.cloudhisab.in/login" className="w-full py-2.5 text-center text-slate-600 font-medium border border-slate-200 rounded-lg">Log in</a>
                                <a href="https://app.cloudhisab.in/register" className="w-full py-2.5 text-center text-white font-medium bg-indigo-600 rounded-lg shadow-md shadow-indigo-500/25">Get Started</a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
