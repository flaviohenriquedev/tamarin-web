import {getSession} from "next-auth/react";
import {baseUrl} from "@/sistema/_root/constantes";
import {MetodoHTTP} from "@/sistema/_root/enums/root-enum";
import {toast} from "react-toastify";

export async function request<T>(
    endpoint: string,
    method: MetodoHTTP,
    body?: any
): Promise<T | null> {
    const session = await getSession();
    const token = session?.user?.token;

    const headers: HeadersInit = {
        "Content-Type": "application/json",
        ...(token ? { "Authorization": `Bearer ${token}` } : {}),
    };

    const response = await fetch(`${baseUrl}${endpoint}`, {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
        const mensagemErro = {
            rota: endpoint,
            metodo: method
        };
        toast.error("Ocorreu um erro na requisição -> " + JSON.stringify(mensagemErro));
        throw new Error(`Erro: ${response.status} ${response.statusText}`);
    }

    const text = await response.text();
    return text ? JSON.parse(text) : null;
}

