import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Tamarin",
    description: "Tamarin",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen h-screen`}
        >
        <ToastContainer/>
        {children}
        </body>
        </html>
    );
}
