import AppDataSource from "../../data-source";
import { Car } from "../../entities/car.entitie";

export const listCarsService = async (limit: number, offset: number) => {
    const carRepo = AppDataSource.getRepository(Car);

    const totalCars = await carRepo.count();

    const nextPage = offset + limit;
    const nextUrl =
        nextPage < totalCars ? `/cars?limit=${limit}&offset=${nextPage}` : null;

    const previous = offset - limit < 0 ? null : offset - limit;

    const previousUrl =
        previous != null ? `/cars?limit=${limit}&offset=${previous}` : null;

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
        .skip(offset)
        .take(limit)
        .getMany();

    return { allCar, totalCars, nextUrl, previousUrl };
};
