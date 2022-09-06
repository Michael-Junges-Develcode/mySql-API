import { Router } from "express";
import PessoaController from "../controllers/PessoaController";

const router = Router();

router.get("/pessoas", PessoaController.getAllPeople);

router.get("/pessoas/:id", PessoaController.getPerson);

export default router;
