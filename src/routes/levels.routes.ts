import { Router } from "express";
import NivelController from "../controllers/NivelController";

const router = Router();
router
  .get("/niveis", NivelController.getAllLevels)
  .get("/niveis/:id", NivelController.getLevel)
  .post("/niveis", NivelController.createLevel)
  .put("/niveis/:id", NivelController.updateLevel)
  .delete("/niveis/:id", NivelController.deleteLevel);

export default router;
