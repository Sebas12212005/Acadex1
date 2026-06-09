const API_URL = "http://localhost:4000/api/tareas";

export async function obtenerTareas() {
  const respuesta = await fetch(API_URL);

  if (!respuesta.ok) {
    throw new Error("Error al obtener tareas");
  }

  return respuesta.json();
}

export async function obtenerTareaPorId(id) {

  const respuesta = await fetch(
    `${API_URL}/${id}`
  );

  if (!respuesta.ok) {
    throw new Error("Error al obtener la tarea");
  }

  return respuesta.json();
}

export async function crearTarea(tarea) {

  const respuesta = await fetch(
    API_URL,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tarea),
    }
  );

  if (!respuesta.ok) {
    throw new Error("Error al crear tarea");
  }

  return respuesta.json();
}

export async function actualizarTarea(id, tarea) {

  const respuesta = await fetch(
    `${API_URL}/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tarea),
    }
  );

  if (!respuesta.ok) {
    throw new Error("Error al actualizar tarea");
  }

  return respuesta.json();
}

export async function eliminarTarea(id) {

  const respuesta = await fetch(
    `${API_URL}/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!respuesta.ok) {
    throw new Error("Error al eliminar tarea");
  }

  return respuesta.json();
}