import mongoose from 'mongoose';

const UserS = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    income:[],
    budget:[],
    expense:[]
},
{
    timestamps:true
}
)

module.exports = mongoose.model('user',UserS)