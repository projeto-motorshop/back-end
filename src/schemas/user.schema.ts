import * as yup from "yup";
import { SchemaOf } from "yup";
import {
    IUserResponse,
    IUserRequest,
    IUserUpdate,
} from "../interfaces/user.interface";

const userSchema: SchemaOf<IUserRequest> = yup.object().shape({
    description: yup.string().notRequired(),
    birthdate: yup.date().required(),
    salesman: yup.boolean().required(),
    isAdm: yup.boolean().notRequired(),
    cpf: yup.string().required(),
    phone: yup.string().required(),
    password: yup.string().required(),
    email: yup.string().email().required(),
    name: yup.string().required(),
    urlImg: yup.string().notRequired(),
});

const respUserSchema: SchemaOf<IUserResponse> = yup.object().shape({
    description: yup.string().notRequired(),
    createdAt: yup.date().notRequired(),
    birthdate: yup.date().notRequired(),
    salesman: yup.boolean().notRequired(),
    isAdm: yup.boolean().notRequired(),
    cpf: yup.string().notRequired(),
    phone: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    name: yup.string().notRequired(),
    urlImg: yup.string().notRequired(),
    id: yup.string().notRequired(),
});

const listRespUserSchema = yup.array(respUserSchema);

const updateUserSchema: SchemaOf<IUserUpdate> = yup.object().shape({
    description: yup.string().notRequired(),
    birthdate: yup.date().notRequired(),
    salesman: yup.boolean().notRequired(),
    cpf: yup.string().notRequired(),
    phone: yup.string().notRequired(),
    password: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    name: yup.string().notRequired(),
    urlImg: yup.string().notRequired(),
});

export { userSchema, respUserSchema, listRespUserSchema, updateUserSchema };
