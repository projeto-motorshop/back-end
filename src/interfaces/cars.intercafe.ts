
export interface IImageRequest {
    urlImg: string
}
export interface IImageResponse {
    id: string
    urlImg: string
    carId: string
}

export interface ICarsRequest {
    brand: string;
    model: string;
    year: number;
    fuel: string;
    mileage: string;
    images: IImageRequest[]
    price: number;
    priceFipe: number;
    frontImg: string;
    description: string;
}

export interface ICarsResponse {
    id: string;
    brand: string;
    model: string;
    year: number;
    fuel: string;
    mileage: string;
    price: number;
    priceFipe: number;
    frontImg: string;
    description: string;
    images: IImageResponse[]
}



export interface ICarsUpdate {
    brand?: string;
    model?: string;
    year?: number;
    fuel?: string;
    mileage?: string;
    price?: number;
    priceFipe?: number;
    frontImg?: string;
    description?: string;
    images?: IImageRequest[]
}


