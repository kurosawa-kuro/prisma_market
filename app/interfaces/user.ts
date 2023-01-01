export interface User {
    id: number,
    name: string,
    email: string,
    password: string,
    avatar?: string,
    createdAt: Date,
    updatedAt: Date,
}