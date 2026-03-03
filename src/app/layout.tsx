import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CloudHisaab | Complete Cloud Billing & Business Management Solution",
  description: "Designed for Indian shopkeepers, retailers, and small businesses who want to run smarter. Fast GST billing, inventory, and ledger from your phone or PC.",
  keywords: ["CloudHisaab", "Cloud Billing", "Business Management", "GST Invoicing", "Inventory Management", "Indian Retailers"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased text-slate-800 bg-slate-50 overflow-x-hidden`} >
        {children}
      </body>
    </html>
  );
}
