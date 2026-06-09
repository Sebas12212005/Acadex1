import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  obtenerTareaPorId,
  actualizarTarea
} from "../services/tareas.service";

function EditarTareaPage() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [formulario, setFormulario] = useState({
    titulo: "",
    descripcion: "",
    estado: "",
    prioridad: "",
  });

  useEffect(() => {

    async function cargarTarea() {

      try {

        const tarea = await obtenerTareaPorId(id);

        setFormulario(tarea);

      } catch (error) {
        console.error(error);
      }

    }

    cargarTarea();

  }, [id]);

  function manejarCambio(e) {

    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });

  }

  async function manejarSubmit(e) {

    e.preventDefault();

    try {

      await actualizarTarea(id, formulario);

      navigate("/tareas");

    } catch (error) {

      console.error(error);

    }

  }

  return (
    <div>

      <h1>Editar tarea</h1>

      <form onSubmit={manejarSubmit}>

        <div className="mb-3">

          <label>Título</label>

          <input
            type="text"
            name="titulo"
            className="form-control"
            value={formulario.titulo}
            onChange={manejarCambio}
          />

        </div>

        <div className="mb-3">

          <label>Descripción</label>

          <textarea
            name="descripcion"
            className="form-control"
            value={formulario.descripcion}
            onChange={manejarCambio}
          />

        </div>

        <div className="mb-3">

          <label>Estado</label>

          <select
            name="estado"
            className="form-control"
            value={formulario.estado}
            onChange={manejarCambio}
          >
            <option value="pendiente">
              Pendiente
            </option>

            <option value="en progreso">
              En progreso
            </option>

            <option value="completada">
              Completada
            </option>
          </select>

        </div>

        <div className="mb-3">

          <label>Prioridad</label>

          <select
            name="prioridad"
            className="form-control"
            value={formulario.prioridad}
            onChange={manejarCambio}
          >
            <option value="alta">Alta</option>
            <option value="media">Media</option>
            <option value="baja">Baja</option>
          </select>

        </div>

        <button
          type="submit"
          className="btn btn-warning"
        >
          Guardar cambios
        </button>

      </form>

    </div>
  );
}

export default EditarTareaPage;