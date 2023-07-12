import React, { useState } from 'react';
import './BookingForm.css'
import Gymgif from '../../images/Gyn9.gif'

const BookingForm = () => {
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    selectedService: ''
  });

  const handleInputChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform booking submission logic here
    console.log(bookingData);
    // Reset the form
    setBookingData({
      name: '',
      email: '',
      phoneNumber: '',
      selectedService: ''
    });
  };

  return (
    

    <div>
      <div className='class-header'> Book A Demo Class</div>
      <div className='class-container'>
        <img className="class-img" src = {Gymgif} alt='gym-gif' />
      <form className='form-container' onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={bookingData.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={bookingData.email}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="phoneNumber"
        placeholder="Your Phone Number"
        value={bookingData.phoneNumber}
        onChange={handleInputChange}
      />
      <select
        name="selectedService"
        value={bookingData.selectedService}
        onChange={handleInputChange}
      >
        <option value="">Select a Class</option>
        <option value="service1">Class 1</option>
        <option value="service2">Class 2</option>
        <option value="service3">Class 3</option>
        <option value="service4">Class 4</option>
      </select>
      <button type="submit">Book Now</button>
    </form>
      </div>
    </div>
  );
};

export default BookingForm;
