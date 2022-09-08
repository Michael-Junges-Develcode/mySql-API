//routes/turmasRoute.js

import { Router } from "express";
import TurmaController from "../controllers/TurmaController";

const router = Router();
router
  .get("/turmas", TurmaController.getAllGroups)
  .get("/turmas/:id", TurmaController.getGroup)
  .post("/turmas", TurmaController.createGroup)
  .put("/turmas/:id", TurmaController.updateGroup)
  .delete("/turmas/:id", TurmaController.deleteGroup);
  
export default router;
