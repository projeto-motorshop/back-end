import cors from "cors";
import "dotenv/config";
import express, { Application } from "express";
import "express-async-errors";
import "reflect-metadata";
import handleError from "./errors/handleError";
import { userRoutes } from "./Routes/user.routes";
import { loginRoutes } from "./Routes/login.routes";
import { carRoutes } from "./Routes/car.routes";
import { commentsRoutes } from "./Routes/comment.routes";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "../swagger.json";

const app: Application = express();
app.use(cors());
app.use(express.json());

app.use("/login", loginRoutes);

app.use("/users", userRoutes);

app.use("/comments", commentsRoutes);

app.use("/cars", carRoutes);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(handleError);

export default app;
