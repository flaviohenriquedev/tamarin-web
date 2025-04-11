'use client'

import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LayoutLogin({ children }: { children: React.ReactNode }) {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session?.user?.token) {
            router.replace("/adm");
        }
    }, [session, router]);

    return (
        <div className={`w-screen h-screen bg-background-login`}>
            {children}
        </div>
    );
}
