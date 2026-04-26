import NextAuth from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      cedula: string
      tipo: string
      accessToken: string
      id: string
      name: string
    }
  }
  interface User {
    cedula: string
    tipo: string
    accessToken: string
    id: string
    name: string
    token: string
  }
  interface JWT {
    cedula: string
    tipo: string
    accessToken: string
    id: string
    name: string
  }
}