import { Router } from "express";
import { createCarsController } from "../controllers/cars.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/user/ensureDataIsValid.middleware";
import { reqCarSchema } from "../schemas/car.schema";
import { ensureAuthenticateMiddleware } from "../middlewares/ensureAuth.middleware";

export const carRoutes = Router();

carRoutes.post(
    "",
    ensureAuthenticateMiddleware,
    ensureDataIsValidMiddleware(reqCarSchema),
    createCarsController
);
