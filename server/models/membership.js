import mongoose from "mongoose";

const membershipSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }
});


export default mongoose.model("Membership" , membershipSchema )