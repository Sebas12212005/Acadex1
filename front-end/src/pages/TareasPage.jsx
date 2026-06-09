import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  obtenerTareas,
  eliminarTarea
} from "../services/tareas.service";

function TareasPage() {

  const [tareas, setTareas] = useState([]);

  useEffect(() => {

    async function cargarTareas() {

      try {

        const datos = await obtenerTareas();

        console.log(datos);

        setTareas(datos);

      } catch (error) {

        console.error(error);

      }

    }

    cargarTareas();

  }, []);

  async function manejarEliminar(id) {

    const confirmar = window.confirm(
      "¿Desea eliminar esta tarea?"
    );

    if (!confirmar) return;

    try {

      await eliminarTarea(id);

      setTareas(
        tareas.filter(
          tarea => tarea.id !== id
        )
      );

    } catch (error) {

      console.error(error);

    }

  }

  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-between align-items-center mb-3">

        <h1>Lista de tareas</h1>

        <Link
          to="/tareas/nueva"
          className="btn btn-success"
        >
          <i className="bi bi-plus-circle me-2"></i>
          Nueva tarea
        </Link>

      </div>

      <table className="table table-striped">

        <thead>

          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Estado</th>
            <th>Prioridad</th>
            <th>Acciones</th>
          </tr>

        </thead>

        <tbody>

          {tareas.map((tarea) => (

            <tr key={tarea.id}>

              <td>{tarea.id}</td>

              <td>{tarea.titulo}</td>

              <td>{tarea.estado}</td>

              <td>{tarea.prioridad}</td>

              <td>

                <Link
                  to={`/tareas/${tarea.id}`}
                  className="btn btn-sm btn-primary"
                >
                  <i className="bi bi-eye"></i>
                </Link>

                <Link
                  to={`/tareas/${tarea.id}/editar`}
                  className="btn btn-sm btn-warning ms-2"
                >
                  <i className="bi bi-pencil"></i>
                </Link>

                <button
                  className="btn btn-sm btn-danger ms-2"
                  onClick={() => manejarEliminar(tarea.id)}
                >
                  <i className="bi bi-trash"></i>
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default TareasPage;