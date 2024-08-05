import { Document } from "mongoose"

export interface ITodo extends Document {   // for interaction with mongoose
    name: string
    description: string,
    status: boolean
}