import {EndPoint} from "@/sistema/_root/types/root-types";
import {EntidadePadrao} from "@/sistema/_root/entidades/EntidadePadrao";
import {request} from "@/sistema/_root/helper/request";

export class CrudService<E extends EntidadePadrao> {
    protected endpoint: EndPoint;

    constructor(endpoint: EndPoint) {
        this.endpoint = endpoint;
    }

    async listar(): Promise<E[]> {
        if (!this.endpoint.listar) return [];
        return await request<E[]>(this.endpoint.listar.caminho, this.endpoint.listar.metodo);
    }

    async salvar(data: E): Promise<void> {
        if (!this.endpoint.salvar) return;
        await request(this.endpoint.salvar.caminho, this.endpoint.salvar.metodo, data);
    }

    async atualizar(id: string | number, data: E): Promise<E | null> {
        if (!this.endpoint.atualizar) return null;
        return await request<E>(
            `${this.endpoint.atualizar.caminho}/${id}`,
            this.endpoint.atualizar.metodo,
            data
        );
    }

    async deletar(id: string | number): Promise<boolean> {
        if (!this.endpoint.deletar) return false;
        await request(`${this.endpoint.deletar.caminho}/${id}`, this.endpoint.deletar.metodo);
        return true;
    }

}