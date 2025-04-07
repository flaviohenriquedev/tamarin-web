import CredentialsProvider from "next-auth/providers/credentials";
import {LoginService} from "@/pages/login/login-service";

export const nextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "email:",
                    type: "email",
                    placeholder: "your-email",
                },
                senha: {
                    label: "senha:",
                    type: "password",
                    placeholder: "your-password",
                },
            },
            async authorize(credentials) {

                const service: LoginService = new LoginService();

                try {
                    const response = await service.login(credentials?.email, credentials?.senha)
                    if (response) {
                        return response
                    } else {
                        return null
                    }
                } catch (error) {
                    console.log(error);
                }
                return null;
            },
        }),
    ],
    pages: {
        signIn: '/login',
        signOut: '/',
    },
    callbacks: {
        async jwt({token, user}: any) {
            return {...token, ...user}
        },
        async session({ session, token }: any) {
            session.user = token as any;
            return session;
        },
    },
};