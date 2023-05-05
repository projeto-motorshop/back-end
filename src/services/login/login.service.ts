import { compare } from "bcryptjs";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entitie";
import AppError from "../../errors/appError";
import { IUserLogin } from "../../interfaces/user.interface";
import jwt from "jsonwebtoken";
import "dotenv/config";

const loginUserService = async ({ email, password }: IUserLogin) => {
    const userRepository = AppDataSource.getRepository(User);

    const findUsers = await userRepository.findOneBy({ email: email });

    if (!findUsers) {
        throw new AppError("Password or email incorrect", 403);
    }

    const checkPassword = await compare(password, findUsers.password);

    if (!checkPassword) {
        throw new AppError("Password or email incorrect", 403);
    }

    const tokenUser = jwt.sign(
        { isAdm: findUsers.isAdm, salesman: findUsers.salesman },
        process.env.SECRET_KEY,
        {
            subject: findUsers.id,
            expiresIn: "24h",
        }
    );

    return tokenUser;
};

export { loginUserService };
