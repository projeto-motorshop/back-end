import { Router } from "express";
import {
    createUserController,
    deleteUserController,
    listProfileController,
    listUserByIdController,
    listUserControler,
    resetPasswordController,
    sendEmailPasswordRecoveryController,
    updateAdressController,
    updateUserController,
} from "../controllers/user.controller";
import { ensureAuthenticateMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureDataIsValidMiddleware } from "../middlewares/user/ensureDataIsValid.middleware";
import { ensureUserEmailExistsMiddleware } from "../middlewares/user/ensureEmailExist.middleware";
import { ensureExistUserMiddleware } from "../middlewares/user/ensureExistUser.middleware";
import { ensureUserIsOwnerMiddleware } from "../middlewares/user/ensureNotOwner.middleware";
import {
    updateAddressSchema,
    updateUserSchema,
    userSchema,
} from "../schemas/user.schema";

export const userRoutes = Router();

userRoutes.post(
    "",
    ensureDataIsValidMiddleware(userSchema),
    ensureUserEmailExistsMiddleware,
    createUserController
);

userRoutes.get("", ensureAuthenticateMiddleware, listUserControler);
userRoutes.get("/profile", ensureAuthenticateMiddleware, listProfileController);

userRoutes.get("/:id", ensureExistUserMiddleware, listUserByIdController);

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

userRoutes.post(
    "/sendEmailPasswordRecovery",
    sendEmailPasswordRecoveryController
);

userRoutes.patch("/resetPassword/:id", resetPasswordController);
