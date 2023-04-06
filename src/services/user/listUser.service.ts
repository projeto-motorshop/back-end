import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entitie";
import AppError from "../../errors/appError";
import { IUserResponse } from "../../interfaces/user.interface";
import { listRespUserSchema } from "../../schemas/user.schema";

const listUsersService = async (): Promise<IUserResponse[]> => {
    try {
        const userRepository = AppDataSource.getRepository(User);

        const users = await userRepository.find();

        const respListUser = await listRespUserSchema.validate(users, {
            stripUnknown: true,
        });

        return respListUser;
    } catch (err) {
        throw new AppError(err.message, 404);
    }
};

export { listUsersService };
