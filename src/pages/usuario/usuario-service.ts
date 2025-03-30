import {CrudService} from "@/crud/crud-service";
import {Usuario} from "@/entidades/usuario/Usuario";
import {usuarioEndPoints} from "@/pages/usuario/usuario-end-points";

export class UsuarioService extends CrudService<Usuario>{
    constructor() {
        super(usuarioEndPoints)
    }
}