import mongoose from "mongoose";
import Membership from "../models/membership";


export const addMembership = async (req,res) => {
    try {
        const{name , duration , price} = req.body;

        const membershipItems = new Membership({
            name , 
            duration , 
            price
        });

        membershipItems.save();
        res.status(200).json("Item added successfully")
    } catch (error) {
        
        res.status(404).json(error)
    }

}