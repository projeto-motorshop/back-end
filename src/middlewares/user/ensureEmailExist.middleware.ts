import { NextFunction, Request, Response } from "express";
import AppDataSource from "../../data-source";
import AppError from "../../errors/appError";
import { User } from "../../entities/user.entitie";

const ensureUserEmailExistsMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const userRepository = AppDataSource.getRepository(User);

    const findUser = await userRepository.findOneBy({ email: req.body.email });

    if (findUser) {
        throw new AppError("Existing Email", 404);
    }

    return next();
};

export { ensureUserEmailExistsMiddleware };
