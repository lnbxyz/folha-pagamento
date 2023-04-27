import { Router } from "express";
import { FolhaController } from "./../controllers/folha.controller";

const router: Router = Router();

router.get("/folha/calcular", new FolhaController().calcular);
router.post("/folha/cadastrar", new FolhaController().cadastrar);

export { router };
