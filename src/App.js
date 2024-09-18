import React,{lazy,Suspense} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Menu } from './components/Menu';
import { Booking } from './components/Booking';
import { Navbar } from './components/Navbar';
import { CockTail } from './components/CockTail';
import {FoodCategories} from './components/FoodCategories'
import { IndividualCategory } from './components/IndividualCategory';
import { AboutUs } from './components/AboutUs';

 
 

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/menu" element={<Menu />}>
            <Route path="foodcategories" element={<FoodCategories/>}>
                      
                 
            
            </Route>
            <Route path="foodcategories/:id" element={<IndividualCategory />} />

            <Route path="cockTail" element={<CockTail/>}/>
 
            
            
          
        </Route>
        <Route path="/booking" element={<Booking />} />
      </Routes>
     
    </Router>
  );
}
