import { useEffect, useState } from "react";
import { obtenerTareas } from "../services/tareas.service";

function ResumenPage() {

  const [estadisticas, setEstadisticas] = useState({
    total: 0,
    pendientes: 0,
    progreso: 0,
    completadas: 0,
  });

  useEffect(() => {

    async function cargarDatos() {

      try {

        const tareas = await obtenerTareas();

        const pendientes = tareas.filter(
          tarea => tarea.estado === "pendiente"
        ).length;

        const progreso = tareas.filter(
          tarea => tarea.estado === "en progreso"
        ).length;

        const completadas = tareas.filter(
          tarea => tarea.estado === "completada"
        ).length;

        setEstadisticas({
          total: tareas.length,
          pendientes,
          progreso,
          completadas,
        });

      } catch (error) {

        console.error(error);

      }

    }

    cargarDatos();

  }, []);

  return (
    <div className="container mt-4">

      <h1 className="mb-4">
        Resumen de tareas
      </h1>

      <div className="row">

        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h5>Total</h5>
              <h2>{estadisticas.total}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h5>Pendientes</h5>
              <h2>{estadisticas.pendientes}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h5>En progreso</h5>
              <h2>{estadisticas.progreso}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h5>Completadas</h5>
              <h2>{estadisticas.completadas}</h2>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default ResumenPage;