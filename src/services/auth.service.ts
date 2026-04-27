import axios from "axios";
import type { AxiosResponse } from "axios";
import type { LoginApiResponse } from "@/types/auth-api";

interface LoginProps {
  correo: string;
  clave: string;
}

export async function loginUser({
  correo,
  clave,
}: LoginProps): Promise<AxiosResponse<LoginApiResponse> | null> {
  const apiUrl = process.env.API_URL;

  if (!apiUrl) {
    console.error("API_URL no esta definida en variables de entorno.");
    return null;
  }

  const normalizedApiUrl = apiUrl.endsWith("/") ? apiUrl : `${apiUrl}/`;

  try {
    const response = await axios.post<LoginApiResponse>(
      `${normalizedApiUrl}auth/login`,
      {
        correo,
        clave,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        validateStatus: () => true,
      },
    );

    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message =
        (error.response?.data as { message?: string } | undefined)?.message ??
        error.message;

      console.log("Error en la peticion:", message);
      return null;
    }

    console.log("Error inesperado al iniciar sesion.");
    return null;
  }
}

export async function createUser() {
  // Implementar logica para crear un nuevo usuario
  const apiUrl = process.env.API_URL;
  console.log("API_URL:", apiUrl);

  if (!apiUrl) {
    console.error("API_URL no esta definida en variables de entorno.");
    return null;
  }

  const normalizedApiUrl = apiUrl.endsWith("/") ? apiUrl : `${apiUrl}/`;
  try {
    const response = await axios.post(
      `${normalizedApiUrl}auth/register/operario`,
      {
        correo: "jp3563454@prueba.com",
        clave: "12345678",
        comedor:"Cafeteria Central",
        nombre: "Jose",
        apellido: "Padilla",
        programa: "Ingenieria de Sistemas",
        cedula: "6666666",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        validateStatus: () => true,
      },
    );

    if (response.status < 200 || response.status >= 300) {
      console.log("Error en la respuesta del servidor:", response.status);
      console.log("Mensaje de error:", response.data?.message);
      return null;
    }
    console.log("Usuario creado exitosamente:", response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message =
        (error.response?.data as { message?: string } | undefined)?.message ??
        error.message;

      console.log("Error en la peticion:", message);
      return null;
    }
    console.log("Error inesperado al crear usuario.");
    return null;
  }
}
