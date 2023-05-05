import { Request, Response } from "express";
import { ICommentUpdate } from "../interfaces/comments.interface";
import { createCommentService } from "../services/comment/createComment.service";
import { deleteCommentService } from "../services/comment/deleteComment.service";
import { listCommentService } from "../services/comment/listComment.service";
import { listCommentsByCarIdService } from "../services/comment/listCommentByCarId.service";
import { listCommentsByIdService } from "../services/comment/listCommentById.service";
import { pathCommentService } from "../services/comment/updateComment.service";


export const createCommentController = async (req: Request, res: Response) => {
    const comment = req.body.description;
    const userId = req.user.id
    const carId = req.params.id;

    const createComment = await createCommentService(comment, userId, carId)

    return res.status(201).json(createComment);


}
export const listCommentControler = async (req: Request, res: Response) => {
    const listComments = await listCommentService();
    return res.status(200).json(listComments);
};

export const listCommentsByCarIdController = async (req: Request, res: Response) => {
    const carId = req.params.id;
    const listCar = await listCommentsByCarIdService(carId);
    return res.status(200).json(listCar);
};

export const listCommentsByIdController = async (req: Request, res: Response) => {
    const commentId = req.params.id;
    const listComment = await listCommentsByIdService(commentId);
    return res.status(200).json(listComment);
};


export const updateCommentController = async (req: Request, res: Response) => {
    const commentBody: ICommentUpdate = req.body;
    const commentID = req.params.id;
    const updateComment = await pathCommentService(commentBody, commentID);
    return res.status(200).json(updateComment);
};



export const deleteCommentController = async (req: Request, res: Response) => {
    const commentID = req.params.id;
    const deleteComment = await deleteCommentService(commentID);
    return res.status(204).json(deleteComment.message);
};