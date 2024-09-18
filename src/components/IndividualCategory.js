import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './IndividualCategory.css';  

export const IndividualCategory = () => {
  const { id } = useParams();
  const [meals, setMeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMeals, setFilteredMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const result = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`);
        setMeals(result.data.meals);
        setFilteredMeals(result.data.meals);
      } catch (error) {
        console.error('Error fetching meals', error);
      }
    };

    fetchMeals();
  }, [id]);

  useEffect(() => {
    if (searchQuery) {
      setFilteredMeals(
        meals.filter((meal) =>
          meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredMeals(meals);
    }
  }, [searchQuery, meals]);

  const getRandomPrice = () => (Math.random() * 20 + 5).toFixed(2);  
  return (
    <div className="individual-category-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for meals..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button
          className="search-button"
          onClick={() => setSearchQuery(searchQuery.trim())}
        >
          Search
        </button>
      </div>

      <div className="meals-grid">
        {filteredMeals.map((meal) => (
          <div className="meal-item" key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-image" />
            <div className="meal-info">
              <h5>{meal.strMeal}</h5>
              <p className="meal-price">${getRandomPrice()}</p>
              <button className="add-to-cart-button">
                <i className="fas fa-shopping-cart"></i> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
