import {getSession} from "next-auth/react";
import {baseUrl} from "@/sistema/_root/constantes";

export async function getHeaderRequest() {
    const session = await getSession()
    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${session?.user?.token}`
    }
}

async function request(endpoint: string, method: string = "GET", body?: any) {
    const headers = await getHeaderRequest();
    return fetch(`${baseUrl}${endpoint}`, {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
    });
}