import mongoose from "mongoose";

const ExcersiseSchema = new mongoose.Schema({
    excersiseName:String,
    mainMuscle:String,
    addsMuscle:String,
    excersiseDescription:String,
    excersiseType: {
        type: String,
        enum: ['W domu','Na siłowni','Na zewnątrz','Wszędzie'],
        default:'Wszędzie',
    },
},
{timestamps:true}
);

export default mongoose.model('Excersise', ExcersiseSchema);