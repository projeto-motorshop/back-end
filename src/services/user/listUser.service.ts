import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entitie";
import { IUserResponse } from "../../interfaces/user.interface";
import { listRespUserSchema } from "../../schemas/user.schema";

const listUsersService = async (): Promise<IUserResponse[]> => {
    const userRepository = AppDataSource.getRepository(User);

    const users = await userRepository.find({
        relations: {
            address: true,
        },
    });

    const respListUser = await listRespUserSchema.validate(users, {
        stripUnknown: true,
    });

    return respListUser;
};

export { listUsersService };
