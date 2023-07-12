import React from 'react';
import './SideNavBar.css';
import {Link} from 'react-router-dom'

const AdminNav = () => {
    return (
        <div className='admin-nav-bar'>
               
        <div className='link-container'>
          <Link to="/dashboard/profile" className='side-links'>View Classes</Link>
        </div>
        <div className='link-container'>
          <Link to="/dashboard/bookedclass " className='side-links'>View Trainers</Link>
        </div>
        
      </div>
        
    );
};

export default AdminNav;