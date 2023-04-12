import { Request, Response } from "express";
import { IUserRequest, IUserUpdate } from "../interfaces/user.interface";
import { createUserService } from "../services/user/createUser.service";
import { deleteUserService } from "../services/user/deleteUser.service";
import { listUsersService } from "../services/user/listUser.service";
import { listUserIDService } from "../services/user/listUserByID.service";
import { updateUserService } from "../services/user/updateUser.service";

const createUserController = async (req: Request, res: Response) => {
    const user: IUserRequest = req.body;
    const createUser = await createUserService(user);
    return res.status(201).json(createUser);
};

const listUserControler = async (req: Request, res: Response) => {
    const listUsers = await listUsersService();
    return res.status(200).json(listUsers);
};

const listUserByIdController = async (req: Request, res: Response) => {
    const userID = req.params.id;
    const listUser = await listUserIDService(userID);
    return res.status(200).json(listUser);
};

const updateUserController = async (req: Request, res: Response) => {
    const userData: IUserUpdate = req.body;
    const userID = req.params.id;
    const updateUser = await updateUserService(userData, userID);
    return res.status(200).json(updateUser);
};

const deleteUserController = async (req: Request, res: Response) => {
    const userID = req.params.id;
    const deleteUser = await deleteUserService(userID);
    return res.status(204).json(deleteUser.message);
};

export {
    createUserController,
    listUserControler,
    listUserByIdController,
    updateUserController,
    deleteUserController,
};

