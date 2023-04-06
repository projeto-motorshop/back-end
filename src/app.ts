import cors from "cors";
import "dotenv/config";
import express, { Application } from "express";
import "express-async-errors";
import "reflect-metadata";
import handleError from "./errors/handleError";
import { userRoutes } from "./Routes/user.routes";
import { loginRoutes } from "./Routes/login.routes";

const app: Application = express();
app.use(cors());
app.use(express.json());

app.use("/login", loginRoutes);

app.use("/users", userRoutes);

app.use(handleError);

export default app;
