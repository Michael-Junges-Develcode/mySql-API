import { Router } from "express";
import PessoaController from "../controllers/PessoaController";

const router = Router();

router.get("/pessoas", PessoaController.getAllPeople);

router.get("/pessoas/:id", PessoaController.getPerson);

router.post("/pessoas", PessoaController.createPerson);

router.put("/pessoas/:id", PessoaController.updatePerson);

router.delete("/pessoas/:id", PessoaController.deletePerson);

export default router;
