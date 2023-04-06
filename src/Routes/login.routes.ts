import { Router } from "express";
import { loginUserController } from "../controllers/login.controller";

export const loginRoutes = Router();

loginRoutes.post("", loginUserController);
