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
}

export interface ICarsRequest {
    brand: string;
    model: string;
    year: string;
    fuel: string;
    mileage: string;
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
}
