import { NextFunction, Request, Response } from "express";
import AppError from "../../errors/appError";

const ensureUserIsOwnerMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { id } = req.user;

    if (id !== req.params.id) {
        throw new AppError("Not Authorization", 401);
    }

    return next();
};

export { ensureUserIsOwnerMiddleware };
