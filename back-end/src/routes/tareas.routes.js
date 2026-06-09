import { Router } from "express";
import {
  listarTareas,
  verDetalleTarea,
  crearTarea,
  actualizarTarea,
  eliminarTarea,
} from "../controllers/tareas.controller.js";

const router = Router();

// API REST

router.get("/", listarTareas);
router.get("/:id", verDetalleTarea);

router.post("/", crearTarea);

router.put("/:id", actualizarTarea);

router.delete("/:id", eliminarTarea);

export default router;