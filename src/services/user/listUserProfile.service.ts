import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entitie";
import { IUserResponse } from "../../interfaces/user.interface";

export const listProfileService = async (
    userID: string
): Promise<IUserResponse> => {
    const userRepository = AppDataSource.getRepository(User);

    const userProfile = await userRepository
        .createQueryBuilder("user")
        .leftJoinAndSelect("user.address", "address")
        .leftJoinAndSelect("user.cars", "car")
        .select([
            "user.id",
            "user.name",
            "user.email",
            "user.phone",
            "user.urlImg",
            "user.description",
            "user.birthdate",
            "user.salesman",
            "user.cpf",
            "car",
            "address",
        ])
        .where("user.id = :id", { id: userID })
        .getOne();

    return userProfile;
};
