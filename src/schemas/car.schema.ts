import * as yup from "yup";
import { SchemaOf } from "yup";
import { ICarsRequest, ICarsResponse, ICarsUpdate, IImageRequest, IImageResponse } from "../interfaces/cars.intercafe";


const reqImgSchema: SchemaOf<IImageRequest[]> = yup.array().of(
    yup.object().shape({
        urlImg: yup.string().notRequired(),
    })
)
const respImgSchema: SchemaOf<IImageResponse[]> = yup.array().of(
    yup.object().shape({
        id: yup.string().notRequired(),
        urlImg: yup.string().notRequired(),
        carId: yup.string().notRequired()
    })
)

const reqCarSchema: SchemaOf<ICarsRequest> = yup.object().shape({
    images: reqImgSchema,
    description: yup.string().required(),
    frontImg: yup.string().required(),
    priceFipe: yup.number().required(),
    price: yup.number().required(),
    mileage: yup.string().required(),
    fuel: yup.string().required(),
    year: yup.number().required(),
    model: yup.string().required(),
    brand: yup.string().required(),
});

const respCarSchema: SchemaOf<ICarsResponse> = yup.object().shape({
    images: respImgSchema,
    description: yup.string().notRequired(),
    frontImg: yup.string().notRequired(),
    createdAt: yup.date().notRequired(),
    priceFipe: yup.number().notRequired(),
    price: yup.number().notRequired(),
    mileage: yup.string().notRequired(),
    fuel: yup.string().notRequired(),
    year: yup.number().notRequired(),
    model: yup.string().notRequired(),
    brand: yup.string().notRequired(),
    id: yup.string().notRequired(),
});

const listRespCarSchema = yup.array(respCarSchema);

const updateCarSchema: SchemaOf<ICarsUpdate> = yup.object().shape({
    images: reqImgSchema,
    description: yup.string().notRequired(),
    frontImg: yup.string().notRequired(),
    priceFipe: yup.number().notRequired(),
    price: yup.number().notRequired(),
    mileage: yup.string().notRequired(),
    fuel: yup.string().notRequired(),
    year: yup.number().notRequired(),
    model: yup.string().notRequired(),
    brand: yup.string().notRequired(),
});

export { reqCarSchema, respCarSchema, listRespCarSchema, updateCarSchema };

