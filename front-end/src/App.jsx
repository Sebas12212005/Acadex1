import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import HomePage from "./pages/HomePage";
import TareasPage from "./pages/TareasPage";
import NuevaTareaPage from "./pages/NuevaTareaPage";
import EditarTareaPage from "./pages/EditarTareaPage";
import DetalleTareaPage from "./pages/DetalleTareaPage";
import ResumenPage from "./pages/ResumenPage";

function App() {
  return (
    <MainLayout>

      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/tareas"
          element={<TareasPage />}
        />

        <Route
          path="/tareas/nueva"
          element={<NuevaTareaPage />}
        />

        <Route
          path="/tareas/:id/editar"
          element={<EditarTareaPage />}
        />

        <Route
          path="/tareas/:id"
          element={<DetalleTareaPage />}
        />

        <Route
          path="/resumen"
          element={<ResumenPage />}
        />

      </Routes>

    </MainLayout>
  );
}

export default App;