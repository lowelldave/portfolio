import type { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer, ProjectTopBar } from "@/components";

import Providers from "./providers";
import "../globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Project Details",
    description: "Details of the project",
};

const ProjectLayout = ({ children }: PropsWithChildren) => {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Providers>
                    <ProjectTopBar />
                    <div className="layout">
                        <main className="main-project">{children}</main>
                    </div>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
};

export default ProjectLayout;
