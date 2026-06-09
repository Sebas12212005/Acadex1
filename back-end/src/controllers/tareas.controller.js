import { tareas } from "../data/tareas.data.js";

export function listarTareas(req, res) {
  const estado = req.query.estado;

  if (estado) {
    const tareasFiltradas = tareas.filter(
      (tarea) => tarea.estado === estado
    );

    return res.json(tareasFiltradas);
  }

  res.json(tareas);
}

export function verDetalleTarea(req, res) {
  const id = Number(req.params.id);
  const tarea = tareas.find((tarea) => tarea.id === id);

  if (!tarea) {
    return res.status(404).json({
      mensaje: "Tarea no encontrada",
    });
  }

  res.json(tarea);
}

export function crearTarea(req, res) {
  const nuevaTarea = {
    id: tareas.length + 1,
    titulo: req.body.titulo,
    descripcion: req.body.descripcion,
    estado: req.body.estado,
    prioridad: req.body.prioridad,
  };

  tareas.push(nuevaTarea);

  res.status(201).json(nuevaTarea);
}

export function actualizarTarea(req, res) {
  const id = Number(req.params.id);
  const tarea = tareas.find((tarea) => tarea.id === id);

  if (!tarea) {
    return res.status(404).json({
      mensaje: "Tarea no encontrada",
    });
  }

  tarea.titulo = req.body.titulo;
  tarea.descripcion = req.body.descripcion;
  tarea.estado = req.body.estado;
  tarea.prioridad = req.body.prioridad;

  res.json(tarea);
}

export function eliminarTarea(req, res) {
  const id = Number(req.params.id);
  const indice = tareas.findIndex((tarea) => tarea.id === id);

  if (indice === -1) {
    return res.status(404).json({
      mensaje: "Tarea no encontrada",
    });
  }

  tareas.splice(indice, 1);

  res.json({
    mensaje: "Tarea eliminada",
  });
}