import NextAuth from "next-auth"
import Credentials from "@auth/core/providers/credentials";
import {Autenticacao} from "@/root/entidades/Autenticacao";
import {login} from "@/auth/auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Credentials({
        credentials: {
            email: {},
            senha: {}
        },
        authorize: async (credentials) => {
            const autenticacao: Autenticacao = new Autenticacao();
            autenticacao.email = credentials.email as string;
            autenticacao.senha = credentials.senha as string;

            // lógica de autenticação

            login(autenticacao).then(response => response);

            // procura cadastro-usuario com credenciais
            // link da videoaula: https://www.youtube.com/watch?v=vIXmxSSZKuA&t=2724s

            // se autenticado retorna cadastro-usuario


            //se não autenticado retorna null
            return null;
        }
    })],
})