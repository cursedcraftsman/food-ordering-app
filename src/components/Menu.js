import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Menu.css';

export const Menu = () => {
  const location = useLocation();

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h1>Our Menu</h1>
      </div>
      <nav className="menu-nav">
        <Link to="cocktail" className={`menu-nav-button ${location.pathname === "/menu/cocktail" ? "active" : ""}`}>
          Cocktails
        </Link>
        <Link to="foodcategories" className={`menu-nav-button ${location.pathname === "/menu/foodcategories" ? "active" : ""}`}>
          Food Categories
        </Link>
         
        
      </nav>
      <div className="menu-content">
        <Outlet />
      </div>
    </div>
  );
};
