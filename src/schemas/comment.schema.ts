import * as yup from "yup";
import { SchemaOf } from "yup";
import {
    ICommentResponse,
    ICommentUpdate,
} from "../interfaces/comments.interface";

export const createCommentSchema: SchemaOf<ICommentUpdate> = yup
    .object()
    .shape({
        description: yup.string().required(),
    });

export const updateCommentSchema: SchemaOf<ICommentUpdate> = yup
    .object()
    .shape({
        description: yup.string().notRequired(),
    });

export const respCommentSchema: SchemaOf<ICommentResponse> = yup
    .object()
    .shape({
        updatedAt: yup.date().notRequired(),
        createdAt: yup.date().notRequired(),
        description: yup.string().notRequired(),
        id: yup.string().notRequired(),
    });

export const listRespCommentSchema = yup.array(respCommentSchema);
