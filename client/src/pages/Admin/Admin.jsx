import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClassBooking from '../User/ClassBooking/ClassBooking';

import './Admin.css';

const Admin = () => {
  const baseURL = 'http://localhost:5000';

  const [classes, setClasses] = useState([]);
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    fetchClasses();
    fetchTrainers();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/class/getClass`);
      setClasses(response.data);
    } catch (error) {
      console.error('Failed to fetch classes:', error);
    }
  };

  const fetchTrainers = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/getCoach`);
      setTrainers(response.data);
    } catch (error) {
      console.error('Failed to fetch trainers:', error);
    }
  };

  const deleteClass = async (classId) => {
    try {
      await axios.delete(`${baseURL}/api/class/deleteClass/${classId}`);
      fetchClasses();
    } catch (error) {
      console.error('Failed to delete class:', error);
    }
  };

  const deleteTrainer = async (trainerId) => {
    alert('are you sure')
    try {
      await axios.delete(`${baseURL}/api/deleteCoach/${trainerId}`);
      fetchTrainers();
    } catch (error) {
      console.error('Failed to delete trainer:', error);
    }
  };

  return (
    <div>
      <h2>All Classes</h2>
      <div className="class-container">
        {classes.map((cl) => (
          <div key={cl._id} className='class-card'>
            <h2>{cl.name}</h2>
            <p>{cl.description}</p>
            <button onClick={() => deleteClass(cl._id)}>Delete</button>
            
          </div>
        ))}
      </div>

      <h2>All Trainers</h2>
      <div className="coach-container">
        {trainers.map((trainer) => (
          <div key={trainer._id} className='trainer-card'>
            <h2>{trainer.name}</h2>
            <div>{trainer.email}</div>
            <div>{trainer.mobile}</div>
            <div>{trainer.spec}</div>
            <button onClick={() => deleteTrainer(trainer._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
