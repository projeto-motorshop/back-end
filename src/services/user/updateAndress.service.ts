import AppDataSource from "../../data-source";
import { Address } from "../../entities/address.entitie";
import { User } from "../../entities/user.entitie";
import AppError from "../../errors/appError";
import { IAddressUpdate } from "../../interfaces/user.interface";
import { updateUserSchema } from "../../schemas/user.schema";

const updateAdressService = async (
    AdressData: IAddressUpdate,
    userID: string
) => {
    try {
        const userRepository = AppDataSource.getRepository(User);
        const adressRepository = AppDataSource.getRepository(Address);

        const findUser = await userRepository.findOne({
            where: { id: userID },
            relations: { address: true, cars: true },
        });

        const findAdress = await adressRepository.findOneBy({
            id: findUser.address.id,
        });

        const updatedAdress = {
            ...findAdress,
            ...AdressData,
        };

        await adressRepository.save(updatedAdress);

        findUser.address = updatedAdress;

        await userRepository.save(findUser);

        const validatedResponse = await updateUserSchema.validate(findUser, {
            stripUnknown: true,
        });

        return validatedResponse;
    } catch (error) {
        throw new AppError(error.message, 400);
    }
};

export { updateAdressService };
