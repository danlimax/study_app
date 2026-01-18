import { api } from "./api";

interface ICreateTask {
  theme: string;
  name: string;
  level: string;
  sugestion: string;
}

export async function getAll(query: string) {
  const response = await api.get("/tasks", {
    params: {
      theme: query,
    },
  });

  return response.data;
}

export async function create(body: ICreateTask) {
  await api.post("/tasks", body);
}
