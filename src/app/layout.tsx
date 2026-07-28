import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BOPRP Fire Portal",
  description:
    "Bay of Plenty RP Fire & Emergency department portal for rosters, SOPs, training and fleet information.",
  icons: {
    icon: "/images/boprplogo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-content text-ink antialiased`}
      >
        <Sidebar />
        <div className="flex min-h-screen flex-col md:pl-64">
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
