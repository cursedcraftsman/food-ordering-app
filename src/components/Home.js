import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="home-container">
    
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Dish Discover</h1>
          <p>Discover the best dishes around you, handpicked for every taste.</p>
           
        </div>
      </section>

    
      <section className="featured-dishes">
        <h2 className="section-title">Featured Dishes</h2>
        <div className="dishes-container">
          <div className="dish-card">
            <img src="https://images.pexels.com/photos/24206915/pexels-photo-24206915/free-photo-of-woman-hands-holding-fork-and-eating-rice.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Dish 1" />
            <h3>Biryani</h3>
            <p></p>
          </div>
          <div className="dish-card">
            <img src="https://images.pexels.com/photos/28125427/pexels-photo-28125427/free-photo-of-naan-roti-tarkari-everest-tandoori-kitchen.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Dish 2" />
            <h3>Butter Chicken</h3>
            <p></p>
          </div>
          <div className="dish-card">
            <img src="https://images.pexels.com/photos/33406/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" alt="Dish 3" />
            <h3>Grilled Chicken Salad</h3>
            <p></p>
          </div>
        </div>
      </section>

    
      <section className="cta-section">
        <h2>Ready to Order?</h2>
        <p>Explore our full menu and discover your next favorite dish.</p>
        <Link className="cta-btn" to="/menu">Order Now</Link>
      </section>
    </div>
  );
};

export default Home;
