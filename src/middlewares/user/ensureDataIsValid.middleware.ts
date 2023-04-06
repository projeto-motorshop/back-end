import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";
import AppError from "../../errors/appError";

const ensureDataIsValidMiddleware =
    (schema: AnySchema) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const validated = await schema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true,
            });

            req.body = validated;

            return next();
        } catch (error: any) {
            console.log(error);
            throw new AppError(error.message, 409);
        }
    };

export { ensureDataIsValidMiddleware };
