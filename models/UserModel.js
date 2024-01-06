import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    name: {
        type: String,
        default: 'imię',
    },
    lastname: {
        type: String,
        default: 'nazwisko',
    },
    location:{
        type: String,
        default: 'Polska'

    },
    role: {
        type: String,
        enum: ['user','admin'],
        default: 'user',
    },

});

UserSchema.methods.toJSON = function(){
    let obj = this.toObject()
    delete obj.password;
    return obj;
}
export default mongoose.model('User', UserSchema);