import {Usuario} from "@/sistema/recursos-humanos/modulos/usuario/elementos/usuario";

type UsuarioType = InstanceType<typeof Usuario> & {
    accessToken: string;
};

declare module "next-auth" {
    interface Session {
        user: UsuarioType
    }
}
