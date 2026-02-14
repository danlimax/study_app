import type { AxiosError } from "axios";
import { api } from "./api";

interface ICreateTask {
  theme: string;
  name: string;
  level: string;
  sugestion: string;
}

interface ApiResponse {
  message: string;
}

export async function getAll(query = "") {
  try {
    const response = await api.get("/tasks", {
      params: {
        theme: query,
      },
    });

    return response.data;
  } catch (err) {
    const error = err as AxiosError<ApiResponse>;

    throw new Error(error.response?.data.message);
  }
}

export async function create(body: ICreateTask) {
  try {
    const response = await api.post("/tasks", body);

    return response.data.response;
  } catch (err) {
    const error = err as AxiosError<ApiResponse>;

    throw new Error(error.response?.data.message);
  }
}
