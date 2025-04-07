import React from "react";
import {getServerSession} from "next-auth";
import {nextAuthOptions} from "@/app/api/auth/[...nextauth]/options";
import {redirect} from "next/navigation";

export default async function LayoutLogin({children}: { children: React.ReactNode }) {
    const session = await getServerSession(nextAuthOptions)

    if (session?.user?.token) {
        redirect("/adm")
    }
    return (
        <div className={`w-screen h-screen bg-background-login`}>
            {children}
        </div>
    )

}