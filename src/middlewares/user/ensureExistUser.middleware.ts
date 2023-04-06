import { NextFunction, Request, Response } from "express";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entitie";
import AppError from "../../errors/appError";

const ensureExistUserMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const userRepository = AppDataSource.getRepository(User);

    const findUser = await userRepository.findOne({
        where: {
            id: req.params.id,
        },
    });

    if (!findUser) {
        throw new AppError("User not found", 404);
    }

    return next();
};

export { ensureExistUserMiddleware };
