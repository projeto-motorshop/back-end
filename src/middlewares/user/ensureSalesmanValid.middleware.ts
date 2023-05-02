import { NextFunction, Request, Response } from "express";
import AppError from "../../errors/appError";

const ensureSalesmanValidMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { salesman } = req.user;

    if (!salesman) {
        throw new AppError("Not Authorization", 403);
    }

    return next();
};

export { ensureSalesmanValidMiddleware };
