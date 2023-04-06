import { Request, Response } from "express";
import { IUserLogin } from "../interfaces/user.interface";
import { loginUserService } from "../services/login/login.service";

const loginUserController = async (req: Request, res: Response) => {
    const loginDate: IUserLogin = req.body;
    const tokenUser = await loginUserService(loginDate);
    return res.status(200).json({ tokenUser: tokenUser });
};

export { loginUserController };
