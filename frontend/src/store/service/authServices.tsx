import api from "./api";
const config = {
  headers: {
    'Content-Type': 'application/json',
  },
}

export const login = (email: string, password: string) => {
  return api.post(
    "/api/login",
    {
      email: email,
      password: password,
    },
    config
  );
};