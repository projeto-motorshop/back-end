import AppDataSource from "../../data-source";
import { Address } from "../../entities/address.entitie";
import { User } from "../../entities/user.entitie";
import AppError from "../../errors/appError";
import { IUserRequest, IUserResponse } from "../../interfaces/user.interface";
import { respUserSchema } from "../../schemas/user.schema";

const createUserService = async (body: IUserRequest): Promise<IUserResponse> => {
    const userRepository = AppDataSource.getRepository(User);
    const addressRepository = AppDataSource.getRepository(Address);

    const createAddress = addressRepository.create({
        city: body.city,
        state: body.state,
        cep: body.cep,
        street: body.street,
        number: body.number,
        complement: body.complement,
    });

    await addressRepository.save(createAddress);
    try {
        const createUser = userRepository.create({
            name: body.name,
            urlImg: body.urlImg,
            email: body.email,
            password: body.password,
            phone: body.phone,
            cpf: body.cpf,
            description: body.description,
            salesman: body.salesman,
            birthdate: body.birthdate,
            address: createAddress,
        });

        await userRepository.save(createUser);

        const respUser = await respUserSchema.validate(createUser, {
            stripUnknown: true,
        });

        return respUser
    } catch (error) {
        throw new AppError(error.message, 400)
    }
};

export { createUserService };

