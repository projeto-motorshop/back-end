import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entitie";

const listUserIDService = async (userID: string) => {
    const userRepository = AppDataSource.getRepository(User);

    const findUser = await userRepository
        .createQueryBuilder("user")
        .leftJoinAndSelect("user.cars", "car")
        .select([
            "user.id",
            "user.name",
            "user.urlImg",
            "user.description",
            "user.salesman",
            "car",
        ])
        .where("user.id = :id", { id: userID })
        .getOne();

    return findUser;
};

export { listUserIDService };
