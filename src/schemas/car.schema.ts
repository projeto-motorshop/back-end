import * as yup from "yup";
import { SchemaOf } from "yup";
import { ICarsRequest, ICarsResponse } from "../interfaces/cars.intercafe";

const reqCarSchema: SchemaOf<ICarsRequest> = yup.object().shape({
    description: yup.string().required(),
    frontImg: yup.string().required(),
    priceFipe: yup.string().required(),
    price: yup.string().required(),
    mileage: yup.string().required(),
    fuel: yup.string().required(),
    year: yup.string().required(),
    model: yup.string().required(),
    brand: yup.string().required(),
});

const respCarSchema: SchemaOf<ICarsResponse> = yup.object().shape({
    description: yup.string().notRequired(),
    frontImg: yup.string().notRequired(),
    createdAt: yup.date().notRequired(),
    priceFipe: yup.string().notRequired(),
    price: yup.string().notRequired(),
    mileage: yup.string().notRequired(),
    fuel: yup.string().notRequired(),
    year: yup.string().notRequired(),
    model: yup.string().notRequired(),
    brand: yup.string().notRequired(),
    id: yup.string().notRequired(),
});

const listRespCarSchema = yup.array(respCarSchema);

const updateCarSchema: SchemaOf<ICarsRequest> = yup.object().shape({
    description: yup.string().notRequired(),
    frontImg: yup.string().notRequired(),
    priceFipe: yup.string().notRequired(),
    price: yup.string().notRequired(),
    mileage: yup.string().notRequired(),
    fuel: yup.string().notRequired(),
    year: yup.string().notRequired(),
    model: yup.string().notRequired(),
    brand: yup.string().notRequired(),
});

export { reqCarSchema, respCarSchema, listRespCarSchema, updateCarSchema };
