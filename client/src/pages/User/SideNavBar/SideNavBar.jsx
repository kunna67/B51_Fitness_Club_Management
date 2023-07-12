import React from 'react';
import './SideNavBar.css';
import {Link} from 'react-router-dom'

const SideNavBar = () => {
    return (
        <div className='side-nav-bar'>
               
        <div className='link-container'>
          <Link to="/dashboard/profile" className='side-links'>View Profile</Link>
        </div>
        <div className='link-container'>
          <Link to="/dashboard/bookedclass " className='side-links'>View Booked Class</Link>
        </div>
        <div className='link-container'>
          <Link to="/dashboard/allclass" className='side-links'>View Classes</Link>
        </div>
        
      </div>
        
    );
};

export default SideNavBar;