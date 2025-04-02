import {authEndpoint} from "@/auth/auth-endpoint";
import {BaseUrl} from "@/root/base-url";
import {Usuario} from "@/pages/cadastro-usuario/entidade/Usuario";

export async function login({email, senha}: {email: string, senha: string}): Promise<Usuario | null> {

    const baseUrl = BaseUrl.baseUrl;
    const endpointLogin = authEndpoint.login;

    await fetch(`${baseUrl}/${endpointLogin}`, {
        method: endpointLogin.metodo,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, senha})
    }).then(retorno => retorno.json())

    return null;
}