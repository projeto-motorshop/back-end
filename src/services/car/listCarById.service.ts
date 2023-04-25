import AppDataSource from "../../data-source";
import { Car } from "../../entities/car.entitie";

const listCarByIDService = async (carID: string) => {
    const userRepository = AppDataSource.getRepository(Car);

    const findCar = await userRepository
        .createQueryBuilder("car")
        .leftJoinAndSelect("car.user", "user")
        .select([
            "car",
            "user.id",
            "user.name",
            "user.email",
            "user.phone",
            "user.urlImg",
            "user.salesman",
            "user.description",
        ])
        .where("car.id = :id", { id: carID })
        .getOne();

    return findCar;
};

export { listCarByIDService };
