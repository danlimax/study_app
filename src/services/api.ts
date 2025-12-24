import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API,
  withCredentials: true, //Cookies ou outras credenciais como cabeçalhos de autorização
});
