import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const classSchema = mongoose.Schema({
    name: {type:String},
    description: {type:String},
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
  })

export default mongoose.model('Class' , classSchema)