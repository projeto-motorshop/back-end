import { Request, Response } from "express";
import { createCommentService } from "../services/comment/createComment.service";


export const createCommentController = async (req: Request, res: Response) => {
    const comment = req.body;
    const userId = req.user.id
    const carId = req.params.id;
  
    const createComment = await createCommentService(comment, userId, carId)

    return res.status(201).json(createComment);
}
