import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FaCartPlus } from 'react-icons/fa';  
import './CockTailCard.css';  

export const CockTailCard = ({ foods, addToCart }) => {
  return (
    <div className="container">
      <div className="row">
        {foods.map((food, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mt-3" key={index}>
            <div className="card">
              <img
                className="card-img-top"
                src={food.strDrinkThumb}
                alt={food.strDrink}
              />
              <div className="card-body">
                <h5 className="card-title">{food.strDrink}</h5>
                <div className="icon-container">
                  <FaCartPlus 
                    className="icon" 
                    onClick={() => addToCart(food)}   
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
