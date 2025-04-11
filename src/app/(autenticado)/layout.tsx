'use client'

import { ReactNode, useEffect } from "react";
import { RootContextProvider } from "@/sistema/_root/context/root-context";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LayoutAutenticacao({ children }: { children: ReactNode }) {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "loading") return;
        if (!session?.user?.token) {
            router.replace("/login");
        }
    }, [session, status, router]);

    return (
        <RootContextProvider>
            <div>
                {children}
            </div>
        </RootContextProvider>
    );
}
