import AppDataSource from "../../data-source";
import { Car } from "../../entities/car.entitie";

export const listCarsParamsService = async (
    brand,
    model,
    color,
    year,
    fuel,
    minKm,
    maxKm,
    minPrice,
    maxPrice
) => {
    const carRepository = AppDataSource.getRepository(Car);

    let allCars = carRepository
        .createQueryBuilder("Car")
        .leftJoinAndSelect("Car.user", "User")
        .leftJoinAndSelect("Car.images", "Image")
        .select([
            "Car",
            "Image",
            "User.name",
            "User.email",
            "User.id",
            "User.urlImg",
            "User.phone",
        ]);

    if (brand) allCars = allCars.where("Car.brand = :brand", { brand });

    if (model) allCars = allCars.andWhere("Car.model = :model", { model });

    if (color) allCars = allCars.andWhere("Car.color = :color", { color });

    if (year) allCars = allCars.andWhere("Car.year = :year", { year });

    if (fuel) allCars = allCars.andWhere("Car.fuel = :fuel", { fuel });

    if (minKm) allCars = allCars.andWhere("Car.mileage >= :minKm", { minKm });

    if (maxKm) allCars = allCars.andWhere("Car.mileage <= :maxKm", { maxKm });

    if (minPrice)
        allCars = allCars.andWhere("Car.price >= :minPrice", { minPrice });

    if (maxPrice)
        allCars = allCars.andWhere("Car.price <= :maxPrice", { maxPrice });

    const cars = await allCars.getMany();

    return cars;
};
