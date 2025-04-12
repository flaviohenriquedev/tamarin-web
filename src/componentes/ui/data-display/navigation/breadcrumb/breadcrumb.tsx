'use client'

import {BreadcrumbContext} from "@/sistema/_root/context/breadcrumb-context";
import {useContext} from "react";

export function Breadcrumb() {

    const { breadcrumbs } = useContext(BreadcrumbContext)

    function renderData() {
        return (
            <ul>
                {breadcrumbs && breadcrumbs.map(breadcrumb => (
                    <li key={breadcrumb.title}>
                        <a href={breadcrumb.href}>
                            {breadcrumb.icon}
                            {breadcrumb.title}
                        </a>
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <div className="breadcrumbs text-sm">
            {renderData()}
        </div>
    )
}