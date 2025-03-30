import {EntidadePadrao} from "@/entidades/root/EntidadePadrao";
import {EndPoint} from "@/type/root/root-types";
import {BaseUrl} from "@/crud/base-url";
import {toast} from "react-toastify";

export class CrudService<E extends EntidadePadrao> {
    protected endpoint: EndPoint;
    protected baseUrl = BaseUrl.baseUrl;

    constructor(endpoint: EndPoint) {
        this.endpoint = endpoint;
    }

    async listar(): Promise<E[]> {
        if (this.endpoint.listar) {
            return await fetch(`${this.baseUrl}${this.endpoint.listar.caminho}`)
                .then(response => response.json())
        }
        return [];
    }

    async salvar(entidade: E) {
        if (this.endpoint.salvar) {
            await fetch(`${this.baseUrl}${this.endpoint.salvar.caminho}`, {
                method: this.endpoint.salvar.metodo,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(entidade)
            }).then(_ => toast.success("Cadastro realizado"))
        }
    }

    async update(id: string, data: Partial<E>): Promise<E> {
        if (this.endpoint.editar) {
            await fetch(`${this.baseUrl}${this.endpoint.editar.caminho}/:id`, {
                method: this.endpoint.editar.metodo,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(data)
            })
        }

        const response = await fetch(`${this.baseUrl}/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data),
        });
        return response.json();
    }

    async editar(entidade: Partial<E>): Promise<void> {
    }

    async deletar(entidade: E): Promise<void> {

    }
}