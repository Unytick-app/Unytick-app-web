export type LoginApiUser = {
  id: number;
  email: string;
  cedula: string;
  role: string;
  name: string;
};

export type LoginApiPayload = {
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
    user: LoginApiUser;
  };
};

export type LoginApiPayloadError = {
  message: string;
  error: string;
  statusCode: number;
};

export type LoginApiResponse = LoginApiPayload | LoginApiPayloadError;