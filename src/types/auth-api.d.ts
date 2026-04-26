export type LoginApiUser = {
  id: string;
  correo: string;
  cedula: string;
  tipo: string;
  nombre: string;
};

export type LoginApiPayload = {
  message: string;
  usuario: LoginApiUser;
  token: string;
};

export type LoginApiPayloadError = {
  message: string;
  error: string;
  statusCode: number;
};

export type LoginApiResponse = LoginApiPayload | LoginApiPayloadError;