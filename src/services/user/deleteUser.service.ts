import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entitie";

const deleteUserService = async (userID: string) => {
    const userRepository = AppDataSource.getRepository(User);

    const findUser = await userRepository.findOneBy({ id: userID });

    await userRepository.remove(findUser);

    return { message: "Deleted User" };
};

export { deleteUserService };
