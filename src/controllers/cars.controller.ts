import { Request, Response } from "express";
import { ICarsRequest, ICarsUpdate } from "../interfaces/cars.intercafe";
import { createCarService } from "../services/car/createCar.service";
import { deleteCarService } from "../services/car/deleteCar.service";
import { listCarsService } from "../services/car/listCarPagination.service";
import { pathCarService } from "../services/car/pathCar.service";
import { listCarByIDService } from "../services/car/listCarById.service";
import { listCarsParamsService } from "../services/car/listCars.service";

const createCarsController = async (req: Request, res: Response) => {
    const car: ICarsRequest = req.body;
    const userID = req.user.id;
    const createCar = await createCarService(car, userID);
    return res.status(201).json(createCar);
};

const listCarsController = async (req: Request, res: Response) => {
    const {
        brand,
        model,
        color,
        year,
        fuel,
        minKm,
        maxKm,
        minPrice,
        maxPrice,
    } = req.query;

    const listUsers = await listCarsParamsService(
        brand,
        model,
        color,
        year,
        fuel,
        minKm,
        maxKm,
        minPrice,
        maxPrice
    );
    return res.status(200).json(listUsers);
};

// const listCarsController = async (req: Request, res: Response) => {
//     let { limit, offset }: any = req.query;
//     limit = parseInt(limit);
//     offset = parseInt(offset);

//     if (!limit) {
//         limit = 12;
//     }
//     if (!offset) {
//         offset = 0;
//     }

//     const { allCar, totalCars, nextUrl, previousUrl } = await listCarsService(
//         limit,
//         offset
//     );

//     return res.status(200).json({
//         nextUrl,
//         previousUrl,
//         limit,
//         offset,
//         totalCars,
//         allCars: allCar,
//     });
// };

const updateCarsController = async (req: Request, res: Response) => {
    const carBody: ICarsUpdate = req.body;
    const carID = req.params.id;
    const updateCar = await pathCarService(carBody, carID);
    return res.status(200).json(updateCar);
};

const deleteCarsController = async (req: Request, res: Response) => {
    const carID = req.params.id;
    const deleteCar = await deleteCarService(carID);
    return res.status(204).json(deleteCar.message);
};

const listCarByIdController = async (req: Request, res: Response) => {
    const carID = req.params.id;
    const listCar = await listCarByIDService(carID);
    return res.status(200).json(listCar);
};

export {
    createCarsController,
    updateCarsController,
    deleteCarsController,
    listCarByIdController,
    listCarsController,
};
