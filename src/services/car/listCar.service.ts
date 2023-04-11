import AppDataSource from "../../data-source";
import { Car } from "../../entities/car.entitie";


export const listCarsService = async (): Promise<Car[]> => {
    const carRepo = AppDataSource.getRepository(Car);
    const cars = await carRepo.find()
    return cars
}