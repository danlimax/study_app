import type { Request, Response } from "express";
import { createTask, getAllTasks } from "../services/task.service";

async function getAll(req: Request, res: Response) {
  try {
    const query = req.query.theme as string;

    const response = await getAllTasks(query);

    if (response.length === 0) {
      return res
        .status(404)
        .json({
          message: "Nenhuma tarefa com o tema pesquisado foi encontrada.",
        });
    }

    return res.status(200).json(response);
  } catch {
    return res.status(500).json({ message: "Erro interno no servidor." });
  }
}

async function create(req: Request, res: Response) {
  try {
    let prop: string;
    for (prop in req.body) {
      if (!req.body[prop]) {
        return res
          .status(400)
          .json({ message: "Favor preencher todos os campos" });
      }
    }

    const response = await createTask(req.body);

    return res.status(201).json({ response });
  } catch {
    return res.status(500).json({ message: "Erro interno no servidor." });
  }
}

export { getAll, create };
