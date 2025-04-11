import {EndPoint} from "@/sistema/_root/types/root-types";
import {Usuario} from "@/sistema/recursos-humanos/modulos/usuario/elementos/usuario";
import {baseUrl} from "@/sistema/_root/constantes";

export class AuthService {
    protected endpoint: EndPoint;
    protected baseUrl: string = baseUrl;

    constructor(endpoint: EndPoint) {
        this.endpoint = endpoint;
    }

    async login(email?: string, senha?: string): Promise<Usuario> {
        if (this.endpoint.login) {
            const response = await fetch(`${this.baseUrl}${this.endpoint.login.caminho}`, {
                method: this.endpoint.login.metodo,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email, senha})
            });
            return await response.json();
        }
        return new Usuario();
    }

}