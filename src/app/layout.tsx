import type {Metadata} from "next";
import "./globals.css";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ReactNode} from "react";
import {RootContextProvider} from "@/sistema/_root/context/root-context";

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
        <body
            className={`antialiased w-screen h-screen overflow-hidden`}>
        <ToastContainer/>
        {children}
        </body>
        </html>
    );
}
