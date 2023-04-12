import AppDataSource from "../../data-source";
import { Car } from "../../entities/car.entitie";


export const deleteCarService = async (carId: string) => {
    const carRepository = AppDataSource.getRepository(Car);
    const findCar = await carRepository.findOneBy({ id: carId });
    await carRepository.remove(findCar);
    return { message: "Deleted Car" };
};