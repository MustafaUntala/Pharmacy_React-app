import './App.css'; 
import { Link } from 'react-router-dom'; 
import React, { useState } from 'react'; 
import adBanner from './assets/navBar/downloadBanner.webp'; 
 
function AboutUs() { 
    const [formData, setFormData] = useState({ 
        name: '', 
        email: '', 
        message: '', 
      }); 
      const handleChange = (e) => { 
        setFormData({ 
          ...formData, 
          [e.target.name]: e.target.value, 
        }); 
      }; 
      const handleSubmit = (e) => { 
        e.preventDefault(); 
        alert('Thank you for your message!'); 
        setFormData({ name: '', email: '', message: '' }); 
      }; 
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
    <div className="aboutus-container"> 
      <h2>About Us</h2> 
      <p> Welcome to PharmEasy, your trusted partner in healthcare. We are dedicated to making 
healthcare accessible, affordable, and convenient for everyone.</p> 
      <p>Our mission is to simplify healthcare and impact lives by providing a wide range of 
medical products, lab tests, and more at your fingertips. Whether you need medicines, vitamins, 
or a lab test, PharmEasy is here to help.</p> 
      <p>Thank you for choosing PharmEasy. Your health is our priority.</p> 
      <section className="Ad-section1"> 
        <div className="Ad-image1"> 
          <img src={adBanner} alt="#AD" /> 
          <div className="Ad-text1"> 
            <h3>Simplifying</h3> 
            <h3>Healthcare</h3> 
            <h3>Impacting Lives</h3> 
            <p>Download the App for Free</p> 
          </div> 
        </div> 
      </section> 
      <form onSubmit={handleSubmit} className="contact-form"> 
      <h2>Contact Us</h2> 
        <div className="form-group"> 
          <label htmlFor="name">Name:</label> 
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          /> 
        </div> 
        <div className="form-group"> 
          <label htmlFor="email">Email:</label> 
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          /> 
        </div> 
        <div className="form-group"> 
          <label htmlFor="message">Your Query:</label> 
          <textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          ></textarea> 
        </div> 
        <button type="submit" className="contact-submit-button">Submit</button> 
      </form> 
      <h2>Get in touch with Us</h2> 
      <p>E-Mail: info@pharmeasy.com</p> 
      <p>Contact No.: 222-333-4020</p> 
      <p>Instagram: pharmeascy.in | 
      Facebook: pharmeasy.in | 
      Youtube: PharmEasy Tech</p> 
    </div> 
      </div> 
    ); 
  } 
  export default AboutUs;