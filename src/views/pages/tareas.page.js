import { layout } from "../layout.js";

function obtenerBadgeEstado(estado) {
  if (estado === "pendiente") return "bg-danger";
  if (estado === "en progreso") return "bg-warning text-dark";
  if (estado === "completada") return "bg-success";
  return "bg-secondary";
}

function obtenerBadgePrioridad(prioridad) {
  if (prioridad === "alta") return "bg-danger";
  if (prioridad === "media") return "bg-warning text-dark";
  if (prioridad === "baja") return "bg-success";
  return "bg-secondary";
}

export function tareasPage(tareas, mensaje) {
   let contenido = "";

  if (mensaje === "creada") {
    contenido += `
      <div class="alert alert-success">
        Tarea creada correctamente.
      </div>
    `;
  }

  if (mensaje === "actualizada") {
    contenido += `
      <div class="alert alert-warning">
        Tarea actualizada correctamente.
      </div>
    `;
  }

  if (mensaje === "eliminada") {
    contenido += `
      <div class="alert alert-danger">
        Tarea eliminada correctamente.
      </div>
    `;
  }

  contenido += `
<div class="table-responsive">

<table class="table table-hover table-striped">

<thead class="table-dark">

<tr>
<th>ID</th>
<th>Título</th>
<th>Estado</th>
<th>Prioridad</th>
<th>Acciones</th>
</tr>

</thead>

<tbody>
`;

  if (tareas.length === 0) {
    contenido += `
      <div class="alert alert-info">
        No hay tareas registradas.
      </div>
    `;
  }

  tareas.forEach((tarea) => {
contenido += `
<tr>

<td>${tarea.id}</td>

<td>${tarea.titulo}</td>

<td>
    <span class="badge ${obtenerBadgeEstado(tarea.estado)}">
        ${tarea.estado}
    </span>
</td>

<td>
    <span class="badge ${obtenerBadgePrioridad(tarea.prioridad)}">
        ${tarea.prioridad}
    </span>
</td>

<td>

    <a href="/tareas/${tarea.id}"
       class="btn btn-sm btn-primary">
       <i class="bi bi-eye"></i>
    </a>

    <a href="/tareas/${tarea.id}/editar"
       class="btn btn-sm btn-warning">
       <i class="bi bi-pencil"></i>
    </a>

    <form
      action="/tareas/${tarea.id}/eliminar"
      method="POST"
      class="d-inline">

      <button
        type="submit"
        class="btn btn-sm btn-danger">

        <i class="bi bi-trash"></i>

      </button>

    </form>

</td>

</tr>
`;

});

contenido += `
</tbody>
</table>
</div>
`;

  return layout("Tareas", contenido);
}