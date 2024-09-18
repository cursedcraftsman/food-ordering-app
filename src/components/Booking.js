import React, { useState } from 'react';
import './TableBooking.css';

export const Booking = () => {
  const [showForm, setShowForm] = useState(false);

  const handleFindTableClick = () => {
    setShowForm(true);
  };

  return (
    <div className="table-booking-container">
      {!showForm ? (
        <div className="xyz booking-landing">
          <div className="landing-overlay">
            <h1 className="landing-quote" style={{color:"#E64833"}}>"Book a Table for Your Perfect Dining Experience"</h1>
            <div className="button-wrapper">
                <button className=" submit-button" onClick={handleFindTableClick}>
                  Find a Table
                </button>
              </div>
       
          </div>
        </div>
      ) : (
        <div className="form-overlay">
          <div className="form-container">
            <h2 className="form-title">Book Your Table</h2>
            <form className="booking-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
              </div>
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" name="date" required />
              </div>
              <div className="form-group">
                <label htmlFor="time">Time</label>
                <input type="time" id="time" name="time" required />
              </div>
              <div className="form-group">
                <label htmlFor="guests">Number of Guests</label>
                <input type="number" id="guests" name="guests" min="1" required />
              </div>
              <button type="submit" className="submit-button">Book Table</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
