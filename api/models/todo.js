import mongoose, { mongo } from "mongoose";

var Schema=mongoose.Schema;

var TodoSchema=new Schema({
    text:{
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    timestamp: {
        type: String,
        default: Date.now()
    }
})

var Todo=mongoose.model("Todo", TodoSchema);

export default Todo;