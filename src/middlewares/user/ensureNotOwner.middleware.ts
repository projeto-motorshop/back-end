import { NextFunction, Request, Response } from "express";
import AppError from "../../errors/appError";

const ensureUserIsOwnerMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { id, isAdm } = req.user;

    if (isAdm) {
        next();
    }

    if (id !== req.params.id) {
        throw new AppError("Not Authorization", 403);
    }

    return next();
};

export { ensureUserIsOwnerMiddleware };
