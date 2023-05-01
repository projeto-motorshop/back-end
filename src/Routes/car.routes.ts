import { Router } from "express";
import {
    createCarsController,
    deleteCarsController,
    listCarByIdController,
    listCarsController,
    updateCarsController,
} from "../controllers/cars.controller";
import { ensureAuthenticateMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureDataIsValidMiddleware } from "../middlewares/user/ensureDataIsValid.middleware";
import { reqCarSchema } from "../schemas/car.schema";
import { ensureSalesmanValidMiddleware } from "../middlewares/user/ensureSalesmanValid.middleware";

export const carRoutes = Router();

carRoutes.post(
    "",
    ensureAuthenticateMiddleware,
    ensureDataIsValidMiddleware(reqCarSchema),
    ensureSalesmanValidMiddleware,
    createCarsController
);

carRoutes.get("", listCarsController);
carRoutes.get("/:id", ensureAuthenticateMiddleware, listCarByIdController);
carRoutes.patch("/:id", ensureAuthenticateMiddleware, updateCarsController);
carRoutes.delete("/:id", ensureAuthenticateMiddleware, deleteCarsController);
