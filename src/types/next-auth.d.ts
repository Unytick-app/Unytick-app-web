import NextAuth from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      cedula: string
      comedor?: string
      role: string
      accessToken: string
      id: string
      name: string
      email: string
    }
    refreshToken?: string
  }
  interface User {
    cedula: string
    comedor?: string
    role: string
    accessToken: string
    refreshToken: string
    id: string
    name: string
    email: string
  }
  interface JWT {
    cedula: string
    comedor?: string
    role: string
    accessToken: string
    refreshToken: string
    id: string
    name: string
    email: string
  }
}