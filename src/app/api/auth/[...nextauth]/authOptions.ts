import CredentialsProvider from "next-auth/providers/credentials";

interface CustomToken {
    accessToken?: string;
}

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "seu@email.com" },
                password: { label: "Senha", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Credenciais inválidas");
                }

                try {
                    const res = await fetch("https://seu-backend.com/api/auth/login", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            email: credentials.email,
                            password: credentials.password
                        })
                    });

                    const user = await res.json();

                    if (!res.ok) {
                        throw new Error(user.message || "Erro ao autenticar");
                    }

                    return user;
                } catch (error) {
                    throw new Error("Falha na autenticação");
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }: { token: CustomToken; user?: any }) {
            if (user) {
                token.accessToken = user.token;
            }
            return token;
        },
        async session({ session, token }: { session: any; token: CustomToken }) {
            session.accessToken = token.accessToken;
            return session;
        }
    },
    pages: {
        signIn: "/login"
    },
    secret: process.env.NEXTAUTH_SECRET,
};