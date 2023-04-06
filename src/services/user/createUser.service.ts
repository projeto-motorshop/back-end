import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entitie";
import { IUserRequest, IUserResponse } from "../../interfaces/user.interface";
import { respUserSchema } from "../../schemas/user.schema";

const createUserService = async (
    body: IUserRequest
): Promise<IUserResponse> => {
    const userRepository = AppDataSource.getRepository(User);

    const createUser = userRepository.create(body);

    await userRepository.save(createUser);

    const respUser = await respUserSchema.validate(createUser, {
        stripUnknown: true,
    });

    return respUser;
};

export { createUserService };
