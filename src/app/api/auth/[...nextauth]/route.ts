import { loginUser } from "@/services/auth.service";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { LoginApiPayload, LoginApiPayloadError } from "@/types/auth-api";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        correo: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        clave: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const { correo, clave } = credentials;
        const res = await loginUser({ correo, clave });

        if (!res) {
          return null;
        }

        if (res.status < 200 || res.status >= 300) {
          const errorPayload = res.data as LoginApiPayloadError;
          console.log("Respuesta del servidor:", errorPayload);
          console.log("Respuesta status:", res.status);
          return null;
        }

        const payload = res.data as LoginApiPayload;

        console.log("Respuesta exitosa del servidor:", payload);
        console.log("Respuesta exitosa status:", res.status);

        return {
          id: String(payload.usuario.id ?? correo),
          name: payload.usuario.nombre ?? "User",
          email: payload.usuario.correo ?? correo,
          cedula: payload.usuario.cedula,
          tipo: payload.usuario.tipo,
          accessToken: payload.token,
          token: payload.token,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        /* console.log("JWT callback - OBJETO USUARIO:", user); */
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.cedula = user.cedula;
        token.tipo = user.tipo;
        token.accessToken = user.token;
      }

      return token;
    },
    async session({ session, token }) {
      /* console.log("Session callback - ObJETO TOKEN:", token); */

      if (token) {
        session.user.id = token.id as string;
        session.user.cedula = token.cedula as string;
        session.user.tipo = token.tipo as string;
        session.user.accessToken = token.accessToken as string;
        /* console.log("Session callback - ObJETO SESSION:", session); */
      }

      return session;
    },
  },
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
