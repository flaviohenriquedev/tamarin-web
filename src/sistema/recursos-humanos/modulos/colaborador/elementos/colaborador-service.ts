import {CrudService} from "@/sistema/_root/service/crud-service";
import {Colaborador} from "@/sistema/recursos-humanos/modulos/colaborador/elementos/colaborador";
import {colaboradorEndPoints} from "@/sistema/recursos-humanos/modulos/colaborador/elementos/colaborador-end-points";

export class ColaboradorService extends CrudService<Colaborador> {
    constructor() {
        super(colaboradorEndPoints)
    }
}
