import { Address } from "./../entities/address.entitie";
export interface IUserResponse {
    id: string;
    name: string;
    urlImg: string | null;
    email: string;
    phone: string;
    cpf: string;
    description: string | null;
    salesman: boolean;
    birthdate: Date | null;
    createdAt: Date;
}

export interface IUserRequest {
    name: string;
    urlImg?: string | null;
    email: string;
    password: string;
    phone: string;
    cpf: string;
    description?: string | null;
    salesman: boolean;
    isAdm?: boolean;
    birthdate: Date;
    city: string;
    state: string;
    cep: string;
    street: string;
    number: string;
    complement?: string | null;
}

export interface IUserUpdate {
    name?: string;
    urlImg?: string | null;
    email?: string;
    password?: string;
    phone?: string;
    cpf?: string;
    description?: string | null;
    salesman?: boolean;
    birthdate?: Date;
}

export interface IAddressRequest {
    city: string;
    state: string;
    cep: string;
    street: string;
    number: string;
    complement?: string | null;
}

export interface IAddressRsponse {
    id: string;
    city: string;
    state: string;
    cep: string;
    street: string;
    number: string;
    complement?: string | null;
}

export interface IAddressUpdate {
    city?: string;
    state?: string;
    cep?: string;
    street?: string;
    number?: string;
    complement?: string | null;
}

export interface IUserLogin {
    email: string;
    password: string;
}

export interface ISendEmail {
    to: string;
    subject: string;
    text: string;
}
