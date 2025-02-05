import React, { useState } from "react"; 
import './App.css';  
 
    const LogIn = () => { 
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [loggedIn, setLoggedIn] = useState(false); 
    const handleLogin = () => { 
        if (username === 'mustafa' && password === 'KyuNahi') { 
            setLoggedIn(true); 
            alert('Login Successful!'); 
        } else { 
            alert('Invalid Credentials! Please try again.'); 
        } 
    }; 
    const handleLogout = () => { 
        setLoggedIn(false); 
        setUsername(''); 
        setPassword(''); 
        alert('Logged out successfully!'); 
    }; 
    return ( 
        <div className="login-container"> 
            {loggedIn ? ( 
                <div className="welcome-container"> 
                    <h2>Welcome, {username}!</h2> 
                    <button className="logout-button" onClick={handleLogout}>Logout</button> 
                </div> 
            ) : ( 
                <div className="login-form"> 
                    <h2>Login</h2> 
                    <input 
                        type="text" 
                        placeholder="Username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        className="input-field" 
                    /> 
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        className="input-field" 
                    /> 
                    <button className="login-button" onClick={handleLogin}>Login</button> 
                </div>  
            )} 
        </div> 
    ); 
}; 
export default LogIn; 