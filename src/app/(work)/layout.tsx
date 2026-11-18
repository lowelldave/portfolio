import type { Metadata } from "next";

import { Footer, TopBar } from "@/components";

import { fontVariables } from "../fonts";
import Providers from "../providers";
import "../globals.css";

export const metadata: Metadata = {
  title: "Work Details",
  description: "Details of the work",
};

export default function WorkLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <body>
        <Providers>
          <TopBar type="work" />
          <div className="layout details">
            <main className="main-project">{children}</main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
