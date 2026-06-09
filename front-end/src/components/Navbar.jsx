import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

      <div className="container">

        <Link
          className="navbar-brand"
          to="/"
        >
          <i className="bi bi-mortarboard-fill me-2"></i>
          Acadex
        </Link>

        <div className="navbar-nav">

          <Link
            className="nav-link text-white"
            to="/"
          >
            Inicio
          </Link>

          <Link
            className="nav-link text-white"
            to="/tareas"
          >
            Tareas
          </Link>

          <li className="nav-item">
          <Link
            to="/resumen"
            className="nav-link"
          >
            <i className="bi bi-bar-chart-fill me-2"></i>
            Resumen
          </Link>
        </li>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;