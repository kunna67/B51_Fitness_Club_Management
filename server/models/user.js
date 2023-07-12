import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
   
    name : {type : String , required :true} , 
    email : {type : String , required : true},
    password : {type : String , required : true},
    joinedOn : {type : Date , default : Date.now()},
    // membershipStatus: {type: mongoose.Schema.Types.ObjectId, ref: 'Membership',},
    phoneNumber: {type : Number , required :true},
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
      },
    
})

export default mongoose.model("User" , userSchema )
