import React , {useEffect , useState} from 'react';
import './Trainers.css'; 

import trainer1 from '../../images/trainer1.webp'
import trainer2 from '../../images/trainer2.jpg';
import trainer3 from '../../images/trainer3.png';
import trainer4 from '../../images/trainer4.jpg'

import Footer from '../../components/Footer/Footer'

import axios from 'axios'




const Trainers = () => {
  const url = 'http://localhost:5000/api/getCoach'
  const [trainers , setTrainer] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setTrainer(response.data);
      console.log(response.data);
    });
  }, []);
  

  const images = [
    {
      id:0,
      image: trainer1,
    },
    {
      id:1,
      image: trainer2,
    }
    
  ];

  return (
    <div>
      <div className="trainers-container">
      <h2>Meet Our Trainers</h2>
      <div className="trainers-grid">
        {trainers.map(trainer => (
          <div key={trainer.id} className="trainer-card">
            <img src={images[0].image} alt={trainer.name} className="trainer-image" />
            <div className="trainer-info">
              <h2>{trainer.name}</h2>
              <p>{trainer.spec}</p>
              <div>{trainer.mobile}</div>
              
            </div>
          </div>
        ))}
      </div>
      
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Trainers;
