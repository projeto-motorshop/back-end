import { Router } from "express";
import { createCommentController, deleteCommentController, listCommentControler, listCommentsByCarIdController, listCommentsByIdController, updateCommentController } from "../controllers/comments.controller";
import { ensureUserIsCommentOwnerMiddleware } from "../middlewares/comments/ensureIsAccountOwner.middleware";
import { ensureAuthenticateMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureDataIsValidMiddleware } from "../middlewares/user/ensureDataIsValid.middleware";
import { createCommentSchema, updateCommentSchema } from "../schemas/comment.schema";


export const commentsRoutes = Router()

commentsRoutes.get("", ensureAuthenticateMiddleware, listCommentControler)
commentsRoutes.get("/cars/:id", ensureAuthenticateMiddleware, listCommentsByCarIdController)
commentsRoutes.get("/:id", ensureAuthenticateMiddleware, listCommentsByIdController)
commentsRoutes.post("/cars/:id", ensureAuthenticateMiddleware, ensureDataIsValidMiddleware(createCommentSchema), createCommentController)
commentsRoutes.patch("/:id", ensureAuthenticateMiddleware, ensureDataIsValidMiddleware(updateCommentSchema), ensureUserIsCommentOwnerMiddleware, updateCommentController)
commentsRoutes.delete("/:id", ensureAuthenticateMiddleware, ensureUserIsCommentOwnerMiddleware, deleteCommentController)

