import AppDataSource from "../../data-source";
import { Car } from "../../entities/car.entitie";
import AppError from "./../../errors/appError";
import { ICarsUpdate } from "./../../interfaces/cars.intercafe";

export const pathCarService = async (
    carsData: ICarsUpdate,
    carsId: string
): Promise<ICarsUpdate> => {
    try {
        const carsRepo = AppDataSource.getRepository(Car);

        const findCar = await carsRepo
            .createQueryBuilder("car")
            .select(["car"])
            .where("car.id = :id", { id: carsId })
            .getOne();

        await carsRepo.update(carsId, {
            ...findCar,
            ...carsData,
        });

        const respCar = await carsRepo
            .createQueryBuilder("car")
            .leftJoinAndSelect("car.images", "images")
            .select(["car", "images"])
            .where("car.id = :id", { id: carsId })
            .getOne();

        return respCar as ICarsUpdate;
    } catch (error: any) {
        throw new AppError(error.message, 400);
    }
};
