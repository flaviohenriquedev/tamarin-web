import {EndPoint} from "@/type/root/root-types";
import {BaseUrl} from "@/root/base-url";
import {Usuario} from "@/sistema/recursos-humanos/modulos/usuario/elementos/usuario";

export class AuthService {
    protected endpoint: EndPoint;
    protected baseUrl = BaseUrl.baseUrl;

    constructor(endpoint: EndPoint) {
        this.endpoint = endpoint;
    }

    async login(email?: string, senha?: string): Promise<Usuario | null> {

        if (this.endpoint.login) {
            const response = await fetch(`${this.baseUrl}${this.endpoint.login.caminho}`, {
                method: this.endpoint.login.metodo,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email, senha})
            });
            if (!response.ok) {
                return null;
            }
            return await response.json();
        }

        return null;
    }

}