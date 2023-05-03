import { Router } from "express";
import { createCommentController } from "../controllers/comments.controller";
import { ensureAuthenticateMiddleware } from "../middlewares/ensureAuth.middleware";


export const commentsRoutes = Router()

commentsRoutes.post("/:id", ensureAuthenticateMiddleware, createCommentController)