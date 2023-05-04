import { NextFunction, Request, Response } from "express";
import AppError from "../../errors/appError";

const ensureUserIsCommentOwnerMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { id, isAdm } = req.user;

    if (isAdm) {
        next();
    }

    if (id !== req.user.id) {
        throw new AppError("Not Authorization", 403);
    }

    return next();
};

export { ensureUserIsCommentOwnerMiddleware };

