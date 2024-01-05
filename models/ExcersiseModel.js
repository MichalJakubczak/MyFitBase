import mongoose from "mongoose";
import { EXERCISE_STATUS } from "../utils/constants.js";


const ExcersiseSchema = new mongoose.Schema({
    excersiseName:String,
    mainMuscle:String,
    addsMuscle:String,
    excersiseDescription:String,
    excersiseType: {
        type: String,
        enum: Object.values(EXERCISE_STATUS),
        default: EXERCISE_STATUS.ALL,
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
    }
},
{timestamps:true}
);

export default mongoose.model('Excersise', ExcersiseSchema);