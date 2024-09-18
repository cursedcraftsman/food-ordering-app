import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './FoodCategories.css';
 

export const FoodCategories = () => {
   
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        setCategories(result.data.categories.slice(0, 10));
      } catch (error) {
        console.error('Error fetching categories', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <> 
  
    <div className="food-categories-container">
      <div className="text-center mb-4">
        <h2 className="slogan" style={{color:"#E64833"}}>Discover Your Next Meal Adventure!</h2>
        <p className="slogan-subtext" style={{color:"#E64833"}}>Choose a category to explore delicious recipes.</p>
      </div>
      <div className="categories-grid">
        {categories.map((category) => (
          <Link
            to={`/menu/foodcategories/${category.strCategory}`}
            key={category.idCategory}
            className="category-item"
          >
            <img src={category.strCategoryThumb} alt={category.strCategory} className="category-image" />
            <div className="category-info">
              <h5>{category.strCategory}</h5>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
};
