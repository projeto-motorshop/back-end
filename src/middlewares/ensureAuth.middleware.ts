import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

const ensureAuthenticateMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            message: "Invalid token",
        });
    }

    token = token.split(" ")[1];

    jwt.verify(
        token,
        process.env.SECRET_KEY as string,
        (error, decoded: any) => {
            if (error) {
                return res.status(401).json({
                    message: error.message,
                });
            }

            req.user = {
                id: String(decoded.sub),
                isAdm: decoded.isAdm,
                salesman: decoded.salesman,
            };

            return next();
        }
    );
};

export { ensureAuthenticateMiddleware };
