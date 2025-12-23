import { api } from "./api";

export async function getAll(query: string) {
  const response = await api.get("/tasks", {
    params: {
      theme: query,
    },
  });

  return response.data;
}
