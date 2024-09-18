import React from 'react';
import './AboutUs.css';
 

export const AboutUs = () => {
  return (
    <>
      
      <div className="about-section">
        <div className="about-content">
          <h1>About Dish Discover</h1>
          <p>
            At Dish Discover, we believe that food is more than just sustenance—it’s an experience.
            We connect you with the best dishes from top-rated restaurants in your area, 
            bringing fresh, delicious meals straight to your doorstep.
          </p>
          <p>
            From gourmet cuisine to comfort food, Dish Discover curates a variety of options for every palate. 
            We take pride in supporting local businesses while ensuring that our customers have a seamless 
            and delightful food ordering experience.
          </p>
        </div>
      </div>

   
      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>Have questions or feedback? We'd love to hear from you.</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
};

 