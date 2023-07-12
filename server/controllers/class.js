
import Class from "../models/class.js";
import User from '../models/user.js';
import Booking from "../models/booking.js";

import moment from 'moment';

export const addClass = async (req , res) =>{
    const { name, description ,startTime , endTime } = req.body;

    const startTimeDate = moment(startTime, 'h:mm A').toDate();
    const endTimeDate = moment(endTime, 'h:mm A').toDate();

  try {
    const newClass = new Class({
      name,
      description,
      startTime :startTimeDate,
      endTime:endTimeDate

    });
    const existingClass = await Class.findOne({name});
    if(existingClass){
        return res.status(404).json({message : "Class already exist"})
    }else {
        await newClass.save();
        res.json(newClass);

    }
    
  } catch (error) {
    console.error('Failed to create class:', error);
    res.status(500).json({ error: 'Failed to create class' });
  }


}

export const getClass = async (req,res) =>{
  try {
    const classList = await Class.find();
    res.status(200).json(classList)
  } catch (error) {
    console.log(error);
    res.status(404).json({message : error.message})
    
  }
}
export const bookClass = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  try {
    const classItem = await Class.findById(id).select('startTime endTime');
    const user = await User.findById(userId);

    if (!classItem || !user) {
      return res.status(404).json({ error: 'Class or user not found' });
    }

    const existingBooking = await Booking.findOne({
      class: classItem._id,
      user: user._id,
    });

    if (existingBooking) {
      return res.status(400).json({ error: 'Class is already booked' });
    }

    const booking = new Booking({
      class: classItem,
      user: user,
      startTime: classItem.startTime,
      endTime: classItem.endTime,
    });

    await booking.save();

    res.json({ message: 'Class booked successfully', booking });
  } catch (error) {
    console.error('Failed to book class:', error);
    res.status(500).json({ error: 'Failed to book class' });
  }
};

export const getBookings = async (req, res) => {
  const { userId } = req.params; 

  try {
    const userBookings = await Booking.find({ user: userId }).populate('class');
    
    res.json({ bookings: userBookings });
  } catch (error) {
    console.error('Failed to get user bookings:', error);
    res.status(500).json({ error: 'Failed to get user bookings' });
  }
};


export const deleteClass = async (req, res) => {
  const { classId } = req.params;

  try {
    await Class.findByIdAndDelete(classId);
    res.json({ message: 'Class deleted successfully' });
  } catch (error) {
    console.error('Failed to delete class:', error);
    res.status(500).json({ error: 'Failed to delete class' });
  }
};