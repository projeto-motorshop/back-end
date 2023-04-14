
export interface IImageRequest {
    urlImg: string
}
export interface IImageResponse {
    id: string
    urlImg: string
    carId: string
}

export interface ICarsResponse {
    id: string;
    brand: string;
    model: string;
    year: string;
    fuel: string;
    mileage: string;
    price: string;
    priceFipe: string;
    frontImg: string;
    description: string;
    images: IImageResponse[];
}

export interface ICarsRequest {
    brand: string;
    model: string;
    year: string;
    fuel: string;
    mileage: string;
    images: IImageRequest[];
    price: string;
    priceFipe: string;
    frontImg: string;
    description: string;
}

export interface ICarsUpdate {
    brand?: string;
    model?: string;
    year?: string;
    fuel?: string;
    mileage?: string;
    price?: string;
    priceFipe?: string;
    frontImg?: string;
    description?: string;
    images?: IImageRequest[];
}
