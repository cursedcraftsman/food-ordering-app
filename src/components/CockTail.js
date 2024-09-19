import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CockTailCard } from './CockTailCard';
import { CockTailPagenation } from './CockTailPagenation';

export const CockTail = ({ addToCart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(12);
  const [foods, setFoods] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get(
          'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink'
        );
        setFoods(response.data.drinks);
      } catch (err) {
        setError('Error fetching data');
      }
    };

    fetchFoods();
  }, []);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = foods.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <CockTailCard foods={currentPosts} addToCart={addToCart} />
      <CockTailPagenation
        totalPosts={foods.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
