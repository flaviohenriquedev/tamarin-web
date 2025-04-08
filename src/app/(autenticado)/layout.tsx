import {ReactNode} from "react";
import {RootContextProvider} from "@/sistema/_root/context/root-context";
import {getServerSession} from "next-auth";
import {nextAuthOptions} from "@/app/api/auth/[...nextauth]/options";
import {redirect} from "next/navigation";

export default async function LayoutAutenticacao({children}: { children: ReactNode }) {
    const session = await getServerSession(nextAuthOptions)

    if (!session?.user?.token) {
        redirect("/")
    }

    return (
        <RootContextProvider>
            <div>
                {children}
            </div>
        </RootContextProvider>
    )
}