import React , {useState , useEffect}from 'react';
import axios from 'axios';
import ClassBooking from '../ClassBooking/ClassBooking';
import SideNavBar from '../SideNavBar/SideNavBar'

const AllClasses = () => {
    const baseURL = 'http://localhost:5000'
    const [userData, setUserData] = useState(null);
    const [classes, setClasses] = useState([]);

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
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/class/getClass`);
      setClasses(response.data);
    } catch (error) {
      console.error('Failed to fetch classes:', error);
    }
  };
    return (
        <div>
          <SideNavBar></SideNavBar>
            <h2>All Classes</h2>
      <div className="class-container">
        {classes.map((cl) => (
          <div key={cl._id} className='class-card'>
            <h2>{cl.name}</h2>
            <p>{cl.description}</p>
            <ClassBooking userId={userData._id} classId={cl._id}></ClassBooking>

            
            
          </div>
        ))}
      </div>
        </div>
    );
};

export default AllClasses;