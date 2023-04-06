import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entitie";

const listUserIDService = async (userID: string) => {
    const userRepository = AppDataSource.getRepository(User);

    const findUser = await userRepository.findOneBy({ id: userID });

    return findUser;
};

export { listUserIDService };
