import { layout } from "../layout.js";

export function resumenPage(datos){

return layout(
"Resumen",

`
<h1 class="mb-4">
<i class="bi bi-bar-chart"></i>
Resumen de tareas
</h1>

<div class="row">

<div class="col-md-3">
<div class="card text-center">
<div class="card-body">
<h5>Total</h5>
<h2>${datos.total}</h2>
</div>
</div>
</div>

<div class="col-md-3">
<div class="card text-center">
<div class="card-body">
<h5>Pendientes</h5>
<h2>${datos.pendientes}</h2>
</div>
</div>
</div>

<div class="col-md-3">
<div class="card text-center">
<div class="card-body">
<h5>En progreso</h5>
<h2>${datos.progreso}</h2>
</div>
</div>
</div>

<div class="col-md-3">
<div class="card text-center">
<div class="card-body">
<h5>Completadas</h5>
<h2>${datos.completadas}</h2>
</div>
</div>
</div>

</div>
`
);
}