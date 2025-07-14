"use client";
import "./globals.css";
import { Providers } from "@/redux/provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <title>Zappo Enterprises</title>
            </head>
            <body>
                <Providers>
                    <Navbar />
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
