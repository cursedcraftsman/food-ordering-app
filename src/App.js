import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Menu } from './components/Menu';
import { Booking } from './components/Booking';
import { Navbar } from './components/Navbar';
import { CockTail } from './components/CockTail';
import { FoodCategories } from './components/FoodCategories';
import { IndividualCategory } from './components/IndividualCategory';
import { AboutUs } from './components/AboutUs';
import { Cart } from './components/Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(i => i.idDrink === item.idDrink);

      if (existingItemIndex > -1) {
         
        return prevItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
     
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.map(item =>
        item.idDrink === id ? { ...item, quantity: item.quantity - 1 } : item
      ).filter(item => item.quantity > 0); 
      return updatedItems;
    });
  };

  return (
    <Router>
      <Navbar onCartClick={() => setCartVisible(prev => !prev)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />}>
          <Route path="foodcategories" element={<FoodCategories addToCart={addToCart} />} />
          <Route path="foodcategories/:id" element={<IndividualCategory addToCart={addToCart} />} />
          <Route path="cockTail" element={<CockTail addToCart={addToCart} />} />
        </Route>
        <Route path="/booking" element={<Booking />} />
      </Routes>
      {cartVisible && <Cart cartItems={cartItems} removeFromCart={removeFromCart} closeCart={() => setCartVisible(false)} />}
    </Router>
  );
};

export default App;
