import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import NavBar from './NavBar'; 
// import Products from './Products'; 
import AboutUs from './AboutUs'; 
 
function App() { 
  return ( 
    <Router> 
      <Routes> 
        <Route path="/" element={<NavBar />} /> 
        <Route path="/products" element={<Products />} /> 
        <Route path="/aboutus" element={<AboutUs />} /> 
        <Route path="/login" element={<LogIn />} /> 
      </Routes> 
    </Router> 
  ); 
} 
export default App;