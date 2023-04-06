import { hash } from "bcryptjs";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entitie";
import { IUserUpdate } from "../../interfaces/user.interface";
import { respUserSchema } from "../../schemas/user.schema";

const updateUserService = async (data: IUserUpdate, userID: string) => {
    const {
        urlImg,
        name,
        email,
        password,
        phone,
        cpf,
        salesman,
        birthdate,
        description,
    } = data;

    const userRepository = AppDataSource.getRepository(User);

    const findUser = await userRepository.findOneBy({ id: userID });

    await userRepository.update(userID, {
        urlImg: urlImg ? urlImg : findUser.urlImg,
        name: name ? name : findUser.name,
        email: email ? email : findUser.email,
        password: password ? await hash(password, 10) : findUser.password,
        phone: phone ? phone : findUser.phone,
        cpf: cpf ? cpf : findUser.cpf,
        salesman: salesman ? salesman : findUser.salesman,
        birthdate: birthdate ? birthdate : findUser.birthdate,
        description: description ? description : findUser.description,
    });

    const userUpdate = await userRepository.findOneBy({ id: userID });

    const response = await respUserSchema.validate(userUpdate, {
        stripUnknown: true,
    });

    return response;
};

export { updateUserService };
