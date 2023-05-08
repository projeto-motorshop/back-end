import * as yup from "yup";
import { SchemaOf } from "yup";
import {
    ICarsRequest,
    ICarsResponse,
    ICarsUpdate,
    IImageRequest,
    IImageResponse,
} from "../interfaces/cars.intercafe";

const reqImgSchema: SchemaOf<IImageRequest[]> = yup.array().of(
    yup.object().shape({
        urlImg: yup.string().notRequired(),
    })
);
const respImgSchema: SchemaOf<IImageResponse[]> = yup.array().of(
    yup.object().shape({
        id: yup.string().notRequired(),
        urlImg: yup.string().notRequired(),
        carId: yup.string().notRequired(),
    })
);

const reqCarSchema: SchemaOf<ICarsRequest> = yup.object().shape({
    images: reqImgSchema,
    description: yup.string().required(),
    color: yup.string().max(20).required(),
    goodDeal: yup.boolean().notRequired(),
    frontImg: yup.string().required(),
    priceFipe: yup.string().required(),
    price: yup.number().required(),
    mileage: yup.number().required(),
    fuel: yup.string().max(50).required(),
    year: yup.string().required(),
    model: yup.string().required(),
    brand: yup.string().required(),
});

const respCarSchema: SchemaOf<ICarsResponse> = yup.object().shape({
    images: yup.array().of(
        yup.object().shape({
            id: yup.string().notRequired(),
            urlImg: yup.string().notRequired(),
            carId: yup.string().notRequired(),
        })
    ),
    description: yup.string().notRequired(),
    isPublished: yup.boolean().notRequired(),
    goodDeal: yup.boolean().notRequired(),
    frontImg: yup.string().notRequired(),
    createdAt: yup.date().notRequired(),
    priceFipe: yup.string().notRequired(),
    price: yup.number().notRequired(),
    mileage: yup.number().notRequired(),
    fuel: yup.string().notRequired(),
    year: yup.string().notRequired(),
    color: yup.string().notRequired(),
    model: yup.string().notRequired(),
    brand: yup.string().notRequired(),
    id: yup.string().notRequired(),
});

const listRespCarSchema = yup.array(respCarSchema);

const updateCarSchema: SchemaOf<ICarsUpdate> = yup.object().shape({
    images: reqImgSchema,
    description: yup.string().notRequired(),
    color: yup.string().notRequired(),
    isPublished: yup.boolean().notRequired(),
    frontImg: yup.string().notRequired(),
    priceFipe: yup.string().notRequired(),
    price: yup.number().notRequired(),
    mileage: yup.number().notRequired(),
    fuel: yup.string().notRequired(),
    year: yup.string().notRequired(),
    model: yup.string().notRequired(),
    brand: yup.string().notRequired(),
});

const updateImagesCarSchema: SchemaOf<ICarsUpdate> = yup.object().shape({
    images: respImgSchema,
    description: yup.string().notRequired(),
    color: yup.string().notRequired(),
    isPublished: yup.boolean().notRequired(),
    frontImg: yup.string().notRequired(),
    priceFipe: yup.string().notRequired(),
    price: yup.number().notRequired(),
    mileage: yup.number().notRequired(),
    fuel: yup.string().notRequired(),
    year: yup.string().notRequired(),
    model: yup.string().notRequired(),
    brand: yup.string().notRequired(),
});

export {
    reqCarSchema,
    respCarSchema,
    listRespCarSchema,
    updateCarSchema,
    updateImagesCarSchema,
};
