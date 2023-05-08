import AppDataSource from "../../data-source";
import { Car } from "../../entities/car.entitie";

const listCarByIDService = async (carID: string) => {
    const carRepository = AppDataSource.getRepository(Car);

    const findCar = await carRepository
        .createQueryBuilder("car")
        .leftJoinAndSelect("car.user", "user")
        .leftJoinAndSelect("car.images", "images")
        .leftJoinAndSelect("car.comments", "comments")
        .leftJoinAndSelect("comments.user", "userComment")
        .select([
            "car",
            "images",
            "comments",
            "userComment.id",
            "userComment.name",
            "userComment.urlImg",
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
