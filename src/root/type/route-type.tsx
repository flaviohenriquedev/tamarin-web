import {ReactNode} from "react";

export type RouteType = {
    title: string
    icon: ReactNode
    href?: string
    subRoute?: SubRoute[]
}

export type SubRoute = {
    title: string,
    href?: string,
    subRoute?: SubRoute[]
}

export type Tab = {
    title: string
    content: ReactNode
}
