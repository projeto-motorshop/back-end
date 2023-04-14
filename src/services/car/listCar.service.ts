import AppDataSource from "../../data-source";
import { Car } from "../../entities/car.entitie";

export const listCarsService = async (): Promise<Car[]> => {
    const carRepo = AppDataSource.getRepository(Car);
    const allCar = await carRepo
        .createQueryBuilder("Car")
        .innerJoinAndSelect("Car.user", "User")
        .innerJoinAndSelect("Car.images", "Image")
        .select([
            "Car",
            "Image",
            "User.name",
            "User.email",
            "User.id",
            "User.urlImg",
            "User.phone",
        ])
        .getMany();

    return allCar;
};
