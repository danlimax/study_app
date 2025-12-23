import type { Request, Response } from "express";
import { createTask, getAllTasks } from "../services/task.service";

async function getAll(req: Request, res: Response) {
  try {
    const query = req.query.theme as string;

    const response = await getAllTasks(query);

    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
}

async function create(req: Request, res: Response) {
  try {
    const response = await createTask(req.body);

    return res.status(201).json({ response });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

export { getAll, create };
