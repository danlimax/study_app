import type { Request, Response } from "express";
import { createTask, getAllTasks } from "../services/task.service";

//Fazer validação dos dados tem que ser feita no controller.
async function getAll(req: Request, res: Response) {
  try {
    const query = req.query.theme as string;

    const response = await getAllTasks(query);

    if (response.length === 0) {
      return res.status(404).json({ error: "Nenhuma tarefa foi encontrada." });
    }

    return res.status(200).json(response);
  } catch {
    return res.status(500).json({ error: "Internal server error." });
  }
}

async function create(req: Request, res: Response) {
  try {
    const response = await createTask(req.body);

    return res.status(201).json({ response });
  } catch {
    return res.status(500).json({ error: "Internal server error." });
  }
}

export { getAll, create };
