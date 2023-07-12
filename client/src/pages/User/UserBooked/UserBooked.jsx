import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserBooking = () => {
  const [bookings, setBookings] = useState([]);
  const userId = localStorage.getItem('userId'); // Get the userId from local storage

  useEffect(() => {
    fetchUserBookings();
  }, [userId]);

  const fetchUserBookings = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/user/${userId}`);
      const { bookings } = response.data;
      setBookings(bookings);
    } catch (error) {
      console.error('Failed to fetch user bookings:', error);
    }
  };

  return (
    <div>
      <h2>My Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings found</p>
      ) : (
        <ul>
          {bookings.map(booking => (
            <li key={booking._id}>
              <p>Class Name: {booking.class.name}</p>
              <p>Start Time: {booking.class.startTime}</p>
              <p>End Time: {booking.class.endTime}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserBooking;
