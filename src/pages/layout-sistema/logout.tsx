'use client'

import {Button} from "@/componentes/action/button";
import logoutAction from "@/pages/layout-sistema/logoutAction";
import Form from "next/form";

export function Logout() {
    return (
        <Form action={logoutAction}>
            <Button descricao={`Logout`} />
        </Form>
    )
}