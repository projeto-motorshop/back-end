import { NextFunction, Request, Response } from "express";
import AppDataSource from "../../data-source";
import { Car } from "../../entities/car.entitie";
import AppError from "../../errors/appError";

const ensureExistCarMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const userRepository = AppDataSource.getRepository(Car);

    const findCar = await userRepository.findOne({
        where: {
            id: req.params.id,
        },
    });

    if (!findCar) {
        throw new AppError("car not found", 404);
    }

    return next();
};

export { ensureExistCarMiddleware };

