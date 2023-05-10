import { NextFunction, Request, Response } from "express";
import AppDataSource from "../../data-source";
import { Comments } from "../../entities/comments.entitie";
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
    const commentRepository = AppDataSource.getRepository(Comments);

    const findComment = await commentRepository.findOneBy({
        id: req.params.id,
    });

    if (!findComment) {
        throw new AppError("comment not found", 404);
    }

    if (findComment.user.id === id) {
        next();
    } else {
        throw new AppError("you must be account owner", 404);
    }
};

export { ensureUserIsCommentOwnerMiddleware };
