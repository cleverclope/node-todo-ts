import { Schema, model } from "mongoose";
import { ITodo } from "../types/todo";


const todoSchema: Schema = new Schema(
    {
        name:{
            type: String,
            required:false
        },

        description:{
            type: String,
            required: false
        },

        status:{
            type: Boolean,
            required: false
        }
    },
    { timestamps:true }
)

export default model<ITodo>("Todo", todoSchema)