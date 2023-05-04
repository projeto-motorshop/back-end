import * as yup from "yup";
import { SchemaOf } from "yup";
import { ICommentResponse, ICommentUpdate } from "../interfaces/comments.interface";


export const createCommentSchema: SchemaOf<ICommentUpdate> = yup.object().shape({
    description: yup.string().required()
});


export const updateCommentSchema: SchemaOf<ICommentUpdate> = yup.object().shape({
    description: yup.string().notRequired()
});

export const respCommentSchema: SchemaOf<ICommentResponse> = yup.object().shape({
    description: yup.string().notRequired(),
    id: yup.string().notRequired(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired(),
    user: yup.object().notRequired(),
    car: yup.object().notRequired(),
});


export const listRespCommentSchema = yup.array(respCommentSchema);