export interface IUserResponse {
    id: string;
    name: string;
    urlImg: string;
    email: string;
    phone: string;
    cpf: string;
    description: string;
    salesman: boolean;
    birthdate: Date | null;
    createdAt: Date;
}

export interface IUserRequest {
    name: string;
    urlImg?: string;
    email: string;
    password: string;
    phone: string;
    cpf: string;
    description?: string;
    salesman: boolean;
    isAdm?: boolean;
    birthdate: Date;
    city: string;
    state: string;
    cep: string;
    street: string;
    number: string;
    complement?: string;
}

export interface IUserUpdate {
    name?: string;
    urlImg?: string;
    email?: string;
    password?: string;
    phone?: string;
    cpf?: string;
    description?: string;
    salesman?: boolean;
    birthdate?: Date;
}

export interface IAddressRequest {
    city: string;
    state: string;
    cep: string;
    street: string;
    number: string;
    complement?: string;
}

export interface IUserLogin {
    email: string;
    password: string;
}
