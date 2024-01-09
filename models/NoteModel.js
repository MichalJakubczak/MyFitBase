import mongoose from "mongoose";


const NoteSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },

    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    },
},   
        {timestamps:true}
);
export default mongoose.model('Note',NoteSchema);