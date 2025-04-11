import type {Metadata} from "next";
import "./globals.css";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ReactNode} from "react";
import {Providers} from "@/sistema/_root/providers/providers";

export const metadata: Metadata = {
    title: "Tamarin",
    description: "Tamarin",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="pt-BR">
        <body className={`antialiased w-screen h-screen overflow-hidden`}>
        <Providers>
            <ToastContainer/>
            {children}
        </Providers>
        </body>
        </html>
    );
}
