export interface ICommentUpdate {
    description?: string
}


export interface ICommentRequest {
    description: string
}


export interface ICommentResponse {
    id: string
    description: string
    createdAt: Date
    updatedAt: Date
    user: object
    car: object
}