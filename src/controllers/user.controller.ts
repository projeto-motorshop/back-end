import { Request, Response } from "express";
import {
    IAddressUpdate,
    IUserRequest,
    IUserUpdate,
} from "../interfaces/user.interface";
import { createUserService } from "../services/user/createUser.service";
import { deleteUserService } from "../services/user/deleteUser.service";
import { listUsersService } from "../services/user/listUser.service";
import { listUserIDService } from "../services/user/listUserByID.service";
import { updateUserService } from "../services/user/updateUser.service";
import { listProfileService } from "../services/user/listUserProfile.service";
import { updateAdressService } from "../services/user/updateAndress.service";
import { sendEmailPasswordRecoveryService } from "../services/user/sendEmailPasswordRecovery.service";
import { resetPasswordService } from "../services/user/resetPassword.service";

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

const listProfileController = async (req: Request, resp: Response) => {
    const user = req.user.id;
    const userProfile = await listProfileService(user);
    return resp.json(userProfile);
};

const updateAdressController = async (req: Request, res: Response) => {
    const adressData: IAddressUpdate = req.body;
    const userID = req.params.id;
    const updateAdress = await updateAdressService(adressData, userID);
    return res.status(200).json(updateAdress);
};

const sendEmailPasswordRecoveryController = async (
    req: Request,
    res: Response
) => {
    const { email } = req.body;
    const { protocol } = req;
    const host = req.get("host");
    await sendEmailPasswordRecoveryService(email, protocol, host);
    return res.status(200).json({ message: "Password reset link sent!" });
};

const resetPasswordController = async (req: Request, res: Response) => {
    const { password } = req.body;
    const resetToken = req.params.id;
    await resetPasswordService(password, resetToken);
    return res.status(200).json({ message: "New password set!" });
};

export {
    createUserController,
    listUserControler,
    listUserByIdController,
    updateUserController,
    deleteUserController,
    listProfileController,
    updateAdressController,
    sendEmailPasswordRecoveryController,
    resetPasswordController,
};
