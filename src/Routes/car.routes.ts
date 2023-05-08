import { Router } from "express";
import {
    createCarsController,
    deleteCarsController,
    listAllCarsParamsController,
    listCarByIdController,
    listCarsPaginationController,
    updateCarsController,
    updateImagesController,
} from "../controllers/cars.controller";
import { ensureExistCarMiddleware } from "../middlewares/cars/ensureCarExist.middleware";
import isGoodDealMiddleware from "../middlewares/cars/isGoodDeal.middleware";
import { ensureAuthenticateMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureDataIsValidMiddleware } from "../middlewares/user/ensureDataIsValid.middleware";
import { ensureSalesmanValidMiddleware } from "../middlewares/user/ensureSalesmanValid.middleware";
import {
    reqCarSchema,
    updateCarSchema,
    updateImagesCarSchema,
} from "../schemas/car.schema";

export const carRoutes = Router();

carRoutes.post(
    "",
    ensureAuthenticateMiddleware,
    ensureDataIsValidMiddleware(reqCarSchema),
    ensureSalesmanValidMiddleware,
    isGoodDealMiddleware,
    createCarsController
);

carRoutes.get("/allCars", listAllCarsParamsController);

carRoutes.get("/carsPagination", listCarsPaginationController);

carRoutes.get("/:id", listCarByIdController);

carRoutes.patch(
    "/:id",
    ensureAuthenticateMiddleware,
    ensureDataIsValidMiddleware(updateCarSchema),
    ensureSalesmanValidMiddleware,
    ensureExistCarMiddleware,
    updateCarsController
);
carRoutes.delete(
    "/:id",
    ensureAuthenticateMiddleware,
    ensureSalesmanValidMiddleware,
    deleteCarsController
);

carRoutes.patch(
    "/images/:id",
    ensureAuthenticateMiddleware,
    ensureDataIsValidMiddleware(updateImagesCarSchema),
    ensureExistCarMiddleware,
    ensureSalesmanValidMiddleware,
    updateImagesController
);
