import NextAuth from "next-auth"
import Credentials from "@auth/core/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Credentials({
        credentials: {
            email: {},
            senha: {}
        },
        authorize: async (credentials) => {
            console.log(credentials)

            // lógica de autenticação

            // procura usuario com credenciais
            // link da videoaula: https://www.youtube.com/watch?v=vIXmxSSZKuA&t=2724s

            // se autenticado retorna usuario


            //se não autenticado retorna null
            return null;
        }
    })],
})