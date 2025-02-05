import { useState } from 'react'; 
import './App.css'; 
import { Link } from 'react-router-dom'; 
import ZedexSugarFreeSyrup from './assets/products/zedex_syrup_100ml_0.jpg'; 
import Pyremust650 from './assets/products/PYREMUST-650-TAB.jpg'; 
import Mefcrom from './assets/products/Mefcrom-P-2-scaled.webp'; 
import SinarestSyrup from './assets/products/sinarest.jpg'; 
import ZedexSyrup from './assets/products/zedex.jpg'; 
import ENO from './assets/products/eno.jpg';  
import Vicks from './assets/products/vicks.jpg'; 
import MefcromScaled from './assets/products/Mefcrom-P-2-scaled.webp'; 
 
function Products() { 
const [count, setCount] = useState(0); 
  const handleClick = () => { 
    setCount(count + 1); 
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
    <div className="products-section"> 
      <h2>Products</h2> 
<div className="products-container"> 
        <div className="product-card"> 
          <img src={ZedexSugarFreeSyrup} alt="Zedex Sugar Free Syrup" /> 
          <p>Zedex Sugar Free Syrup</p> 
          <button onClick={handleClick}>Add to Cart</button> 
        </div> 
        <div className="product-card"> 
          <img src={Pyremust650} alt="Pyremust 650" /> 
          <p>Pyremust 650</p>  
          <button onClick={handleClick}>Add to Cart</button> 
        </div> 
        <div className="product-card"> 
          <img src={Mefcrom} alt="Mefcrom" /> 
          <p>Mefcrom</p> 
          <button onClick={handleClick}>Add to Cart</button> 
        </div> 
        <div className="product-card"> 
          <img src={SinarestSyrup} alt="Sinarest Syrup" /> 
          <p>Sinarest Syrup</p> 
          <button onClick={handleClick}>Add to Cart</button> 
        </div> 
        <div className="product-card"> 
          <img src={ZedexSyrup} alt="Zedex Syrup" /> 
          <p>Zedex Syrup</p> 
          <button onClick={handleClick}>Add to Cart</button> 
        </div> 
        <div className="product-card"> 
          <img src={ENO} alt="ENO" /> 
          <p>ENO</p> 
          <button onClick={handleClick}>Add to Cart</button> 
        </div> 
        <div className="product-card"> 
          <img src={Vicks} alt="Vicks" /> 
          <p>Vicks</p> 
          <button onClick={handleClick}>Add to Cart</button> 
        </div> 
        <div className="product-card"> 
          <img src={MefcromScaled} alt="Mefcrom Scaled" /> 
          <p>Mefcrom Scaled</p> 
          <button onClick={handleClick}>Add to Cart</button> 
        </div> 
      </div>
    </div> 
    </div>  
  ); 
} 
export default Products;