import "dotenv/config";
import express from "express";
import tareasRoutes from "./routes/tareas.routes.js";
import { loggerMiddleware } from "./middlewares/logger.middleware.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(loggerMiddleware);

// API
app.use("/api/tareas", tareasRoutes);

// 404 API
app.use((req, res) => {
  res.status(404).json({
    mensaje: "Ruta no encontrada",
  });
});

app.listen(PORT, () => {
  console.log(
    `${process.env.APP_NAME} ejecutándose en http://localhost:${PORT}`
  );
});