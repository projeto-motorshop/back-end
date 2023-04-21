import * as yup from "yup";
import { SchemaOf } from "yup";
import {
    IUserResponse,
    IUserRequest,
    IUserUpdate,
    IAddressRequest,
    IAddressUpdate,
} from "../interfaces/user.interface";
import { listRespCarSchema, respCarSchema } from "./car.schema";

const userSchema: SchemaOf<IUserRequest> = yup.object().shape({
    complement: yup.string().notRequired().nullable(),
    number: yup.string().required(),
    street: yup.string().required(),
    cep: yup.string().required(),
    state: yup.string().required(),
    city: yup.string().required(),
    description: yup.string().notRequired().nullable(),
    birthdate: yup.date().required(),
    salesman: yup.boolean().required(),
    isAdm: yup.boolean().notRequired(),
    cpf: yup.string().required(),
    phone: yup.string().required(),
    password: yup.string().required(),
    email: yup.string().email().required(),
    name: yup.string().required(),
    urlImg: yup.string().notRequired().nullable(),
});

const addressSchema: SchemaOf<IAddressRequest> = yup.object().shape({
    complement: yup.string().notRequired().nullable(),
    number: yup.string().required(),
    street: yup.string().required(),
    cep: yup.string().required(),
    state: yup.string().required(),
    city: yup.string().required(),
});

const respUserSchema: SchemaOf<IUserResponse> = yup.object().shape({
    car: listRespCarSchema,
    address: addressSchema,
    description: yup.string().notRequired().nullable(),
    createdAt: yup.date().notRequired(),
    birthdate: yup.date().notRequired(),
    salesman: yup.boolean().notRequired(),
    cpf: yup.string().notRequired(),
    phone: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    name: yup.string().notRequired(),
    urlImg: yup.string().notRequired().nullable(),
    id: yup.string().notRequired(),
});

const listRespUserSchema = yup.array(respUserSchema);

const updateUserSchema: SchemaOf<IUserUpdate> = yup.object().shape({
    description: yup.string().notRequired().nullable(),
    birthdate: yup.date().notRequired(),
    salesman: yup.boolean().notRequired(),
    cpf: yup.string().notRequired(),
    phone: yup.string().notRequired(),
    password: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    name: yup.string().notRequired(),
    urlImg: yup.string().notRequired().nullable(),
});

const updateAddressSchema: SchemaOf<IAddressUpdate> = yup.object().shape({
    complement: yup.string().notRequired().nullable(),
    number: yup.string().notRequired(),
    street: yup.string().notRequired(),
    cep: yup.string().notRequired(),
    state: yup.string().notRequired(),
    city: yup.string().notRequired(),
});

export {
    userSchema,
    respUserSchema,
    listRespUserSchema,
    updateUserSchema,
    addressSchema,
    updateAddressSchema,
};
