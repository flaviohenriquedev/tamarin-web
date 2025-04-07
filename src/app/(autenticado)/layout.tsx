import {ReactNode} from "react";
import {RootContextProvider} from "@/sistema/_root/context/root-context";

export default async function LayoutAutenticacao({children}: { children: ReactNode }) {
    // const session = await getServerSession(nextAuthOptions)
    //
    // if (!session?.user?.token) {
    //     console.log("DENTRO DO CARAI", session)
    //     redirect("/")
    // }

    return (
        <RootContextProvider>
            <div>
                {children}
            </div>
        </RootContextProvider>
    )
}