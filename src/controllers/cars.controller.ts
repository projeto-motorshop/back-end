import { Request, Response } from "express";
import {
    ICarsRequest,
    ICarsUpdate,
    IImagesUpdate,
} from "../interfaces/cars.intercafe";
import { createCarService } from "../services/car/createCar.service";
import { deleteCarService } from "../services/car/deleteCar.service";
import { listAllCarsParamsService } from "../services/car/listAllCarParams.service";
import { listCarByIDService } from "../services/car/listCarById.service";
import { listCarsParamsPaginationService } from "../services/car/listCarsParamsPagination.service";
import { pathCarService } from "../services/car/pathCar.service";
import { updateImagesCarService } from "../services/car/updateImagesCar.service";

const createCarsController = async (req: Request, res: Response) => {
    const car: ICarsRequest = req.body;
    const userID = req.user.id;
    const createCar = await createCarService(car, userID);
    return res.status(201).json(createCar);
};

const listCarsPaginationController = async (req: Request, res: Response) => {
    let { limit, offset }: any = req.query;
    limit = parseInt(limit);
    offset = parseInt(offset);

    if (!limit) {
        limit = 12;
    }
    if (!offset) {
        offset = 0;
    }

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

    const { cars, totalCars, nextUrl, previousUrl, totalPages } =
        await listCarsParamsPaginationService(
            brand,
            model,
            color,
            year,
            fuel,
            minKm,
            maxKm,
            minPrice,
            maxPrice,
            limit,
            offset
        );
    return res.status(200).json({
        nextUrl,
        previousUrl,
        limit,
        offset,
        totalPages,
        totalCars,
        allCars: cars,
    });
};

const listAllCarsParamsController = async (req: Request, res: Response) => {
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

    const listAllCars = await listAllCarsParamsService(
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

    return res.status(200).json(listAllCars);
};

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

const updateImagesController = async (req: Request, res: Response) => {
    const carBody: IImagesUpdate = req.body;
    const carID: string = req.params.id;
    const updateCar = await updateImagesCarService(carBody, carID);
    return res.status(204).json(updateCar);
};

export {
    createCarsController,
    updateCarsController,
    deleteCarsController,
    listCarByIdController,
    listCarsPaginationController,
    listAllCarsParamsController,
    updateImagesController,
};
