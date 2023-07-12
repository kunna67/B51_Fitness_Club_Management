import mongoose from "mongoose";

const coachSchema = mongoose.Schema({
  
  
    name: String,
    email: String,
    mobile: {type:String,unique:true},
    spec: String
  
  
  })

export default mongoose.model('Coach' , coachSchema)