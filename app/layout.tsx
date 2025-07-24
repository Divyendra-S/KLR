import type { Metadata } from "next";
import { Fustat } from "next/font/google";
import "./globals.css";

const fustat = Fustat({
  variable: "--font-fustat",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "KLYRR - Modular GTM Systems for SaaS Growth",
  description: "Fix your funnel and drive pipeline with KLYRR's plug-and-play GTM engines. 150+ SQLs in 90 days, $390K revenue lift.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fustat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
