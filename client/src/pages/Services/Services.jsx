
import React from 'react';
import './Services.css'; // Import CSS file for styling
import image from '../../images/services.jpg'

const Services = () => {
  return (
    <div className="services-container" id='services'>
     <div className='services-header'>Our Services</div>
     <div className="service-1">
      <img src={image} className="service-img"/>
      <div className="service-desc">
        <h2>Weight Maintenance</h2>
        <div className="service-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus nulla, bibendum quis vestibulum ac, tristique in dolor. 
        Phasellus gravida pellentesque posuere. Maecenas ac risus tincidunt risus feugiat pulvinar a eget erat. Integer eu bibendum tortor, non varius leo. 
        Donec sodales maximus metus. Duis in diam molestie, mattis ex in,
        tempor lectus. Etiam sit amet arcu sit amet mi elementum interdum. Nunc id ante dolor. Ut bibendum condimentum lectus sit amet mattis.</div>
      </div>
     </div>
     <div className="service-2">
      
      <div className="service-desc">
        <h2>Weight Lifting</h2>
        <div className="service-text">Unleash your inner strength in our dynamic weight lifting class. Ignite your muscles and elevate your fitness levels as you embark on a transformative journey. Our expert trainers will guide you through proper techniques, helping you build power, endurance, and a sculpted physique. Push your limits and embrace the empowering energy of our exhilarating weight lifting sessions.</div>
      </div>
      <img src={image} className="service-img"/>
     </div>
     <div className="service-3">
      <img src={image} className="service-img"/>
      <div className="service-desc">
        <h2>Indoor Cycling</h2>
        <div className="service-text">Pedal your way to new heights in our exhilarating indoor cycling class. Feel the rush of adrenaline as you conquer challenging terrains and reach new levels of endurance. Our passionate instructors will motivate and guide you through high-energy workouts, pushing you to exceed your limits. Experience the thrill of a heart-pumping ride in a vibrant and energetic atmosphere.</div>
      </div>
     </div>
     <div className="service-4">
      
      <div className="service-desc">
        <h2>Yoga</h2>
        <div className="service-text">Experience a rejuvenating journey through our invigorating yoga class. Explore the harmonious blend of gentle stretches, mindful breathing, and tranquil meditation. Immerse yourself in a serene atmosphere as our experienced instructors guide you towards inner balance, strength, and flexibility. Rediscover harmony of mind, body, and soul in every blissful session.</div>
      </div>
      <img src={image} className="service-img"/>
     </div>
    </div>
  );
};

export default Services;

