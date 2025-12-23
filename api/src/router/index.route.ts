import { Router } from "express";
import { create, getAll } from "../app/controllers/task.controller";

const router = Router();

//Tasks routes
router.get("/tasks", getAll);
router.post("/tasks", create);

export default router;
