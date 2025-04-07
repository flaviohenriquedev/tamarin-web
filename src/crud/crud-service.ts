
import {EndPoint} from "@/type/root/root-types";
import {BaseUrl} from "@/root/base-url";
import {toast} from "react-toastify";
import {EntidadePadrao} from "@/sistema/_root/entidades/EntidadePadrao";

export class CrudService<E extends EntidadePadrao> {
    protected endpoint: EndPoint;
    protected baseUrl = BaseUrl.baseUrl;

    constructor(endpoint: EndPoint) {
        this.endpoint = endpoint;
    }

    async listar(): Promise<E[]> {
        if (this.endpoint.listar) {
            console.log("listar usuario", this.endpoint.listar)
            console.log("lista de usuario concatenada", `${this.baseUrl}${this.endpoint.listar.caminho}`);
            try {
                const response = await fetch(`${this.baseUrl}${this.endpoint.listar.caminho}`);

                if (!response.ok) {
                    throw new Error(`Erro ao listar: ${response.status} ${response.statusText}`);
                }

                return await response.json();
            } catch (error) {
                toast.error("Erro ao buscar os dados. Verifique sua conexão.");
            }
        }

        return [];
    }

    async salvar(data: E): Promise<void> {
        if (this.endpoint.salvar) {
            try {
                const response = await fetch(`${this.baseUrl}${this.endpoint.salvar.caminho}`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                });

                if (!response.ok) {
                    console.log("response", response)
                    throw new Error(`Erro ao salvar: ${response.status} ${response.statusText}`);
                }

                toast.success("Salvo com sucesso!");
            } catch (error) {
                toast.error("Erro ao salvar. Verifique os dados e tente novamente.");
            }
        }
    }

    async atualizar(id: string | number, data: E): Promise<E | null> {
        if (this.endpoint.atualizar) {
            try {
                const response = await fetch(`${this.baseUrl}${this.endpoint.atualizar.caminho}/${id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                });

                if (!response.ok) {
                    throw new Error(`Erro ao atualizar: ${response.status} ${response.statusText}`);
                }

                toast.success("Atualizado com sucesso!");
                return await response.json();
            } catch (error) {
                toast.error("Erro ao atualizar. Verifique os dados e tente novamente.");
            }
        }

        return null;
    }

    async deletar(id: string | number): Promise<boolean> {
        if (this.endpoint.deletar) {
            try {
                const response = await fetch(`${this.baseUrl}${this.endpoint.deletar.caminho}/${id}`, {
                    method: "DELETE",
                });

                if (!response.ok) {
                    throw new Error(`Erro ao deletar: ${response.status} ${response.statusText}`);
                }

                toast.success("Excluído com sucesso!");
                return true;
            } catch (error) {
                toast.error("Erro ao excluir. Verifique a conexão ou tente novamente.");
            }
        }

        return false;
    }

}