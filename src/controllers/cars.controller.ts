import { Request, Response } from "express";
import { ICarsRequest, ICarsUpdate } from "../interfaces/cars.intercafe";
import { createCarService } from "../services/car/createCar.service";
import { listCarsService } from "../services/car/listCar.service";
import { pathCarService } from "../services/car/pathCar.service";

const createCarsController = async (req: Request, res: Response) => {
    const car: ICarsRequest = req.body;
    const userID = req.user.id;
    const createCar = await createCarService(car, userID);
    return res.status(201).json(createCar);
};

const listCarsController = async (req: Request, res: Response) => {
    const listCars = await listCarsService();
    return res.status(200).json(listCars);
};

const listCarsByIDController = async (req: Request, res: Response) => {
    const carID = req.params.id;
    // const listCar = await listCarIDService(carID);
    // return res.status(200).json(listCar);
};

const updateCarsController = async (req: Request, res: Response) => {
    console.log("cheguei");

    const carBody: ICarsUpdate = req.body;
    const carID = req.params.id;
    const updateCar = await pathCarService(carBody, carID);
    return res.status(200).json(updateCar);
};

const deleteCarsController = async (req: Request, res: Response) => {
    const carID = req.params.id;
    // const deleteCar = await deleteCarService(carID);
    // return res.status(204).json(deleteCar.message);
};

export {
    createCarsController,
    listCarsController,
    listCarsByIDController,
    updateCarsController,
    deleteCarsController,
};

