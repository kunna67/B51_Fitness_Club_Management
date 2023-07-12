import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css'
import date from 'dateformat';
import SideNavBar from '../SideNavBar/SideNavBar';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchUserData = async () => {
      try {
        
        const response = await axios.get('http://localhost:5000/user/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
    
        setUserData(response.data);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <SideNavBar></SideNavBar>
      <h2>Profile Page</h2>
      {userData ? (
        <div className='profile-container'>
          <p>Name: <span className="user-details">{userData.name}</span></p>
          <p>Email: <span className="user-details">{userData.email}</span></p>
          <p>Joined ON : <span className="user-details">{date(userData.joinedOn , "dddd, mmmm dS, yyyy")}</span></p>
          {/* Display other user data */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default ProfilePage;
