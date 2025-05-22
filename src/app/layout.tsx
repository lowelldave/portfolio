import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Providers from './(home)/providers';
import { Navigation, Footer } from "@/components";

import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Lowell Dave Agnir",
    description: "Frontend Developer | React | Vue | Rest API",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Providers>
                    <div className="layout">
                        <Navigation />
                        <main className="main">{children}</main>
                    </div>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
