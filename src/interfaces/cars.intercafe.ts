export interface IImageRequest {
    urlImg: string;
}
export interface IImageResponse {
    id: string;
    urlImg: string;
    carId: string;
}

export interface ICarsResponse {
    id: string;
    brand: string;
    color: string;
    goodDeal: boolean;
    isPublished: boolean;
    model: string;
    year: string;
    fuel: string;
    mileage: number;
    price: number;
    priceFipe: string;
    frontImg: string;
    description: string;
    images: IImageResponse[];
}

export interface ICarsRequest {
    color: string;
    brand: string;
    model: string;
    year: string;
    fuel: string;
    mileage: number;
    goodDeal: boolean;
    price: number;
    priceFipe: string;
    frontImg: string;
    description: string;
    images: IImageRequest[];
}

export interface ICarsUpdate {
    color?: string;
    isPublished?: boolean;
    brand?: string;
    model?: string;
    year?: string;
    fuel?: string;
    mileage?: number;
    price?: number;
    priceFipe?: string;
    frontImg?: string;
    description?: string;
    images?: IImageRequest[];
}

export interface IImagesUpdate {
    color?: string;
    isPublished?: boolean;
    brand?: string;
    model?: string;
    year?: string;
    fuel?: string;
    mileage?: number;
    price?: number;
    priceFipe?: string;
    frontImg?: string;
    description?: string;
    images?: IImageResponse[];
}
