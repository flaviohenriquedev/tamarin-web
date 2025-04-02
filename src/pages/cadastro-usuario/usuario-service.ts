import {CrudService} from "@/crud/crud-service";
import {Usuario} from "@/pages/cadastro-usuario/entidade/Usuario";
import {usuarioEndPoints} from "@/pages/cadastro-usuario/usuario-end-points";

export class UsuarioService extends CrudService<Usuario>{
    constructor() {
        super(usuarioEndPoints)
    }
}