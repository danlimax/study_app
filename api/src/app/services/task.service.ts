import { prisma } from "../../../prisma/lib/prisma";

interface ICreateTask {
  name: string;
  level: string;
  sugestion: string;
  theme: string;
}

async function getAllTasks(query: string) {
  // Melhorias futuras: paginação, quantidade de itens em cada página, validação para erro se a lista estiver vazia.

  const data = await prisma.task.findMany({
    where: {
      theme: {
        contains: query,
        mode: "insensitive",
      },
    },
  });

  return data;
}

async function createTask(data: ICreateTask) {
  const task = await prisma.task.create({ data: { ...data } });

  return task.name;
}

export { getAllTasks, createTask };
