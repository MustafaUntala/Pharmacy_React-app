import React from 'react'; 
import './App.css'; 
import { Link } from 'react-router-dom'; 
import doctorsImage from './assets/navBar/Pharma-and-Medical.jpg'; 
import pillsImage from './assets/navBar/medicine_ff.webp'; 
import skincareImage from './assets/navBar/healthcare_ff.webp'; 
import labtestImage from './assets/navBar/labtest_ff.webp'; 
import vitaminsImage from './assets/navBar/value_store.png'; 
import giftImage from './assets/navBar/offers_ff.webp'; 
import diabetes from './assets/navBar/1e927857c26-Diabetes.png'; 
import checkup from './assets/navBar/4cb2baf3234-Fullbody.png'; 
import covid from './assets/navBar/cd9606a9173-efr.png';  
import womencare from './assets/navBar/7b238cdbb60-womencare.png'; 
import thyroid from './assets/navBar/71fb3c06e71-Thyroid.png'; 
import vitamins from './assets/navBar/e1a18d8deac-Vitamins.png'; 
import fever from './assets/navBar/e1c60c444bf-Fever.png'; 
import adBanner from './assets/navBar/downloadBanner.webp'; 
 
function NavBar() { 
  return ( 
    <div className="navbar-container"> 
      {/* Navigation Bar */} 
      <nav className="navbar"> 
        <div className="navbar-logo">PharmEasy</div> 
        <ul className="navbar-links"> 
          <li><Link to="/">Home</Link></li> 
          <li><Link to="/products">Products</Link></li> 
          <li><Link to="/aboutus">About Us</Link></li> 
        </ul> 
        <div className="navbar-actions"> 
          <div className="navbar-search"> 
            <input type="text" placeholder="Search" /> 
            <button type="submit">   </button> 
          </div> 
          <div className="navbar-icons"> 
            <Link to="#" className="navbar-cart">     </Link> 
            <Link to="/login" className="navbar-login">Login</Link> 
          </div> 
        </div> 
      </nav> 
      {/* Hero Section */} 
      <section className="hero-section"> 
        <div className="hero-image"> 
          <img src={doctorsImage} alt="Healthcare Professionals" /> 
          <div className="hero-text"> 
            <h1>Take it easy with PharmEasy</h1> 
           <p>Your one-stop solution for all healthcare needs.</p> 
            <button className="hero-button">Shop Now</button> 
          </div> 
        </div> 
      </section> 
      
      {/* Product Categories1 */}  
      <section className="product-categories1"> 
        <h2>Our Categories</h2> 
        <div className="categories-container1"> 
          <div className="category-card1"> 
            <img src={pillsImage} alt="Medicines" /> 
            <p>Medicines</p> 
          </div> 
          <div className="category-card1"> 
            <img src={skincareImage} alt="Skincare" /> 
            <p>Skincare</p> 
          </div> 
          <div className="category-card1"> 
            <img src={labtestImage} alt="Medical Devices" /> 
            <p>Medical Devices</p> 
          </div> 
          <div className="category-card1"> 
            <img src={vitaminsImage} alt="Vitamins & Supplements" /> 
            <p>Vitamins & Supplements</p> 
          </div> 
          <div className="category-card1"> 
            <img src={giftImage} alt="Special Offers" /> 
            <p>Special Offers</p> 
          </div> 
        </div> 
      </section> 
      {/* Product Categories2 */} 
      <section className="product-categories2"> 
        <h2>Lab Tests by Helth Concern</h2> 
        <p>Powered by PharmEasy</p> 
        <div className="categories-container2"> 
          <div className="category-card2"> 
            <img src={diabetes} alt="Medicines" /> 
          </div> 
          <div className="category-card2"> 
            <img src={checkup} alt="Skincare" />            
          </div> 
          <div className="category-card2"> 
            <img src={covid} alt="Medical Devices" />            
          </div> 
          <div className="category-card2"> 
            <img src={womencare} alt="Vitamins & Supplements" />            
          </div> 
          <div className="category-card2"> 
            <img src={thyroid} alt="Special Offers" /> 
          </div> 
          <div className="category-card2"> 
            <img src={vitamins} alt="Special Offers" /> 
          </div> 
          <div className="category-card2"> 
            <img src={fever} alt="Special Offers" /> 
          </div> 
        </div> 
      </section> 
      {/* Ad Section */} 
      <section className="Ad-section"> 
        <div className="Ad-image"> 
          <img src={adBanner} alt="#AD" /> 
          <div className="Ad-text"> 
            <h2>Simplifying</h2> 
            <h2>Healthcare</h2> 
            <h2>Impacting Lives</h2> 
            <p>Download the App for Free</p> 
          </div> 
        </div> 
      </section> 
    </div> 
  ); 
} 
export default NavBar;