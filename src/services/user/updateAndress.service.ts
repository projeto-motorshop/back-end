import AppDataSource from "../../data-source";
import { Address } from "../../entities/address.entitie";
import { User } from "../../entities/user.entitie";
import { IAddressUpdate } from "../../interfaces/user.interface";

const updateAdressService = async (
    AdressData: IAddressUpdate,
    userID: string
) => {
    const userRepository = AppDataSource.getRepository(User);
    const adressRepository = AppDataSource.getRepository(Address);

    const findUser = await userRepository.findOne({
        where: { id: userID },
        relations: { address: true },
    });

    const findAdress = await adressRepository.findOneBy({
        id: findUser.address.id,
    });

    const updatedAdress = {
        ...findAdress,
        ...AdressData,
    };

    await adressRepository.save(updatedAdress);

    return updatedAdress;
};

export { updateAdressService };
