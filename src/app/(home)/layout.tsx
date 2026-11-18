import type { Metadata } from "next";

import { Navigation, Footer } from "@/components";

import { fontVariables } from "../fonts";
import Providers from "../providers";
import "../globals.css";

export const metadata: Metadata = {
  title: "Lowell Dave Agnir",
  description: "Frontend Developer | React | Vue | Rest API",
};

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <body>
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
