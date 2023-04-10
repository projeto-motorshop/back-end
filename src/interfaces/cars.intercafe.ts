export interface ICarsResponse {
    id: string;
    brand: string;
    model: string;
    year: number;
    fuel: string;
    mileage: string;
    price: number;
    priceFipe: number;
    createdAt: Date;
    frontImg: string;
    description: string;
}

export interface ICarsRequest {
    brand: string;
    model: string;
    year: string;
    fuel: string;
    mileage: string;
    price: number;
    priceFipe: number;
    frontImg: string;
    description: string;
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
}
