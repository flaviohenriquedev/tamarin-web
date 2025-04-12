'use client'

import { ReactNode, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LayoutAutenticacao({ children }: { children: ReactNode }) {
    const { status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.replace("/login");
        }
    }, [status, router]);

    if (status === "loading" || status === 'unauthenticated') return null;
    return (
        <div>
            {children}
        </div>
    );
}
