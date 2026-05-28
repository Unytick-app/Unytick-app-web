import { loginUser } from "@/services/auth.service";
import NextAuth, { AuthOptions, User, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import type { LoginApiPayload, LoginApiPayloadError } from "@/types/auth-api";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        document_number: {
          label: "Document Number",
          type: "text",
          placeholder: "Enter your document number",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(
        credentials: { document_number?: string; password?: string } | undefined,
      ) {
        if (!credentials) {
          return null;
        }

        const { document_number, password } = credentials;
        const res = await loginUser({ document_number: document_number ?? "", password: password ?? "" });

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

        console.log("Respuesta exitosa status:", res.status);

        const userObj: User = {
          id: String(payload.data.user.id ?? document_number),
          name: payload.data.user.name ?? "User",
          email: payload.data.user.email ?? "",
          cedula: payload.data.user.cedula,
          role: payload.data.user.role,
          accessToken: payload.data.accessToken,
          refreshToken: payload.data.refreshToken,
        };

        return userObj;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User | null }) {
      if (user) {
        return {
          ...token,
          id: user.id,
          name: user.name,
          email: user.email,
          cedula: user.cedula,
          role: user.role,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
        } as JWT;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.cedula = token.cedula as string;
        session.user.role = token.role as string;
        session.user.accessToken = token.accessToken as string;
        session.user.email = token.email as string;
        if (token.refreshToken) {
          session.refreshToken = token.refreshToken as string;
        }
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
