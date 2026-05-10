import { createUser, loginUser } from "@/services/auth.service";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { LoginApiPayload, LoginApiPayloadError } from "@/types/auth-api";
import { jwtDecode } from "jwt-decode";


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

        const decoded = jwtDecode<Record<string, unknown>>(payload.token);
        if(decoded.rol !== "operario"){
          console.log("SU ROL:", decoded.rol);
          console.log("Acceso denegado: Usuario no es operario.");
          
          return null;
        }

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
        // El token JWT del backend se encuentra en user.accessToken o user.token asi que lo decodificamos para extraer claims personalizados y los agregamos al token de NextAuth
        const decoded = jwtDecode<Record<string, unknown>>(user.token);
       /*  console.log("JWT callback - esto es lo que trae el token de la API:", decoded); */


        return {
          ...token, // mantiene propiedades internas de NextAuth
          ...decoded, // agrega/reemplaza claims del JWT backend
          id: user.id,
          name: user.name,
          email: user.email,
          cedula: user.cedula,
          tipo: user.tipo,
          accessToken: user.token,
        };
      }

      return token;
    },
    async session({ session, token }) {
      /* console.log("Session callback - ObJETO TOKEN guardado en las cookies:", token); */

      if (token) {
        session.user.id = token.id as string;
        session.user.cedula = token.cedula as string;
        session.user.tipo = token.tipo as string;
        session.user.accessToken = token.accessToken as string;
        session.user.comedor = token.comedor as string;
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
