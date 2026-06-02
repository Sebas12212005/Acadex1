import { layout } from "../layout.js";

export function error404Page() {
  return layout(
    "Página no encontrada",
    `
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="card shadow-sm text-center">
          <div class="card-body">
            <div class="display-1 text-danger mb-3">
              <i class="bi bi-exclamation-triangle-fill"></i>
            </div>
            <h1 class="mb-3">404 - Página no encontrada</h1>
            <p class="text-muted mb-4">La ruta solicitada no existe o ya no está disponible.</p>
            <a href="/" class="btn btn-danger">
              <i class="bi bi-house-door-fill me-2"></i> Volver al inicio
            </a>
          </div>
        </div>
      </div>
    </div>
    `
  );
}