import React from 'react';

import Banner from "../../components/Banner/Banner"
import Services from '../Services/Services';
import BookingForm from '../BookingForm/BookingForm';
import PlanCard from '../../components/Plans/Plans';
import Footer from '../../components/Footer/Footer';

import '../../App.css'

const Home = () => {

    const plans = [
        {
          title: 'Basic Plan',
          price: 29.99,
          features: ['Feature 1', 'Feature 2', 'Feature 3']
        },
        {
          title: 'Premium Plan',
          price: 79.99,
          features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5']
        },
        {
          title: 'Standard Plan',
          price: 49.99,
          features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']
        }];
        
    return (
        <div>
            <Banner></Banner>
    
            <Services></Services>

            <BookingForm></BookingForm>
            <div className='plan-header'>Join Us</div>
            <div className='plan-container'>
            {plans.map((plan, index) => (
            <PlanCard
                key={index}
                title={plan.title}
                price={plan.price}
                features={plan.features}
            />
            ))}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;