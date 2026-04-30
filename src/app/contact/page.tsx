import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Navbar from '../../components/Navbar';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#FCFBF4] text-slate-900 font-sans">
            <Navbar alwaysSolid />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                
                <h1 className="text-4xl md:text-5xl font-bold mb-8">Contact Us</h1>
                <p className="text-xl text-slate-600 mb-12">We'd love to hear from you. Please reach out with any questions, feedback, or support requests.</p>
                
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Phone / WhatsApp</h3>
                                <p className="text-slate-600">+91 9419403158</p>
                                <a href="https://wa.me/919419403158" className="text-indigo-600 font-medium mt-2 inline-block">Message on WhatsApp</a>
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center shrink-0">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Email</h3>
                                <p className="text-slate-600">support@cloudhisab.in</p>
                                <a href="mailto:support@cloudhisab.in" className="text-indigo-600 font-medium mt-2 inline-block">Send an Email</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Office</h3>
                                <p className="text-slate-600">Jammu & Kashmir, India</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                        <form className="space-y-4" action="https://wa.me/919419403158" method="get" target="_blank">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                                <input type="text" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                <textarea name="text" rows={4} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="submit" className="w-full py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-colors">
                                Send via WhatsApp
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
