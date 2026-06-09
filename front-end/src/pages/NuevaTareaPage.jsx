import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { crearTarea } from "../services/tareas.service";

function NuevaTareaPage() {

  const navigate = useNavigate();

  const [formulario, setFormulario] = useState({
    titulo: "",
    descripcion: "",
    estado: "pendiente",
    prioridad: "media",
  });

  function manejarCambio(e) {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  }

  async function manejarSubmit(e) {
    e.preventDefault();

    try {
      await crearTarea(formulario);

      navigate("/tareas");

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>

      <h1>Nueva tarea</h1>

      <form onSubmit={manejarSubmit}>

        <div className="mb-3">

          <label className="form-label">
            Título
          </label>

          <input
            type="text"
            name="titulo"
            className="form-control"
            value={formulario.titulo}
            onChange={manejarCambio}
          />

        </div>

        <div className="mb-3">

          <label className="form-label">
            Descripción
          </label>

          <textarea
            name="descripcion"
            className="form-control"
            value={formulario.descripcion}
            onChange={manejarCambio}
          />

        </div>

        <button
          className="btn btn-primary"
          type="submit"
        >
          Guardar
        </button>

      </form>

    </div>
  );
}

export default NuevaTareaPage;