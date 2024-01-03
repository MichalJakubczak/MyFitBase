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

export default mongoose.model('User', UserSchema);