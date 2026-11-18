import type { Metadata } from "next";

import { Footer, TopBar } from "@/components";

import { fontVariables } from "../fonts";
import Providers from "../providers";
import "../globals.css";

export const metadata: Metadata = {
  title: "Project Details",
  description: "Details of the project",
};

export default function ProjectLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <body>
        <Providers>
          <TopBar type="project" />
          <div className="layout details">
            <main className="main-project">{children}</main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
