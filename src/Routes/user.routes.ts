import { Router } from "express";
import {
    createUserController,
    deleteUserController,
    listProfileController,
    listUserByIdController,
    listUserControler,
    updateAdressController,
    updateUserController,
} from "../controllers/user.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/user/ensureDataIsValid.middleware";
import {
    updateAddressSchema,
    updateUserSchema,
    userSchema,
} from "../schemas/user.schema";
import { ensureUserEmailExistsMiddleware } from "../middlewares/user/ensureEmailExist.middleware";
import { ensureAuthenticateMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureExistUserMiddleware } from "../middlewares/user/ensureExistUser.middleware";
import { ensureUserIsOwnerMiddleware } from "../middlewares/user/ensureNotOwner.middleware";

export const userRoutes = Router();

userRoutes.post(
    "",
    ensureDataIsValidMiddleware(userSchema),
    ensureUserEmailExistsMiddleware,
    createUserController
);

userRoutes.get("", ensureAuthenticateMiddleware, listUserControler);
userRoutes.get("/profile", ensureAuthenticateMiddleware, listProfileController);

userRoutes.get(
    "/:id",
    ensureAuthenticateMiddleware,
    ensureExistUserMiddleware,
    ensureUserIsOwnerMiddleware,
    listUserByIdController
);

userRoutes.patch(
    "/:id",
    ensureDataIsValidMiddleware(updateUserSchema),
    ensureAuthenticateMiddleware,
    ensureExistUserMiddleware,
    ensureUserIsOwnerMiddleware,
    updateUserController
);

userRoutes.delete(
    "/:id",
    ensureAuthenticateMiddleware,
    ensureExistUserMiddleware,
    ensureUserIsOwnerMiddleware,
    deleteUserController
);

userRoutes.patch(
    "/adress/:id",
    ensureDataIsValidMiddleware(updateAddressSchema),
    ensureAuthenticateMiddleware,
    ensureExistUserMiddleware,
    ensureUserIsOwnerMiddleware,
    updateAdressController
);
