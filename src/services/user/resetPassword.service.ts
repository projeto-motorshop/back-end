import { hash } from "bcryptjs";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entitie";
import AppError from "../../errors/appError";

const resetPasswordService = async (password: any, resetToken: string) => {
    const userRepository = AppDataSource.getRepository(User);

    const findUser = await userRepository.findOneBy({ resetToken: resetToken });

    if (!findUser) {
        throw new AppError("User not found!");
    }

    await userRepository.update(findUser.id, {
        password: password ? await hash(password, 10) : findUser.password,
    });
};

export { resetPasswordService };
