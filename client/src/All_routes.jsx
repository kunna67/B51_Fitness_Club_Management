import React from 'react';
import { Routes, Route  , Navigate} from 'react-router-dom'
import Trainers from './pages/Trainers/Trainers';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Admin from './pages/Admin/Admin';
import ProfilePage from './pages/User/Profile/Profile';
import UserBooking from './pages/User/UserBooked/UserBooked';
import AllClasses from './pages/User/AllClasses/AllClasses';


// const ProtectedRoute = ({ element: Element, ...rest }) => {
//     const isAuthenticated = localStorage.getItem('token'); // Check if user is authenticated
  
//     return isAuthenticated ? <Route {...rest} element={<Element />} /> : <Navigate to="/login" />;
//   };

const AllRoutes = () => {
    return (
        <Routes>
            <Route exact path = "/" element = {<Home/>} />
            <Route path="/trainers" element = {<Trainers/>}/>
            <Route path='/login' element = {<Login/>}/>
            <Route path='/signup' element = {<Signup/>}/>
            <Route path = '/admin' element = {<Admin/>}></Route>
            <Route path="/dashboard/profile" element={<ProfilePage />} />
            <Route path="/dashboard/bookedclass" element={<UserBooking />} />
            <Route path='/dashboard/allclass' element = {<AllClasses/>}/>
            
        </Routes>
    );
};

export default AllRoutes;