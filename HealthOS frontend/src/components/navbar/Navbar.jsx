import React, {useState} from 'react';
import './Navbar.css'; 
import {Link, useNavigate} from "react-router-dom";
import NavLogo from "../../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";



const Navbar = () => {
  const navigate = useNavigate();
  function redirectHome(){
    navigate("/");
  }

  const logOut=()=>{
    localStorage.removeItem("login");
    navigate("/login");
  }

  const [isMobile, setIsMobile] = useState(false);
  

    return (
        <nav className="navbar">
        <img alt="Logo" className='nav_logo' src={NavLogo} onClick={redirectHome}/>
        <ul style={{margin:'0', padding:'0'}} className={isMobile? "nav-links-mobile":"nav-links"}
        onClick={()=>setIsMobile(false)}
        >
          <Link to="/" className="about">
            <li>Home</li>
          </Link>
          
          <Link to="/upload" className="schedule">
            <li>Scan a Menu</li>
          </Link>
          <Link to="/chat-ai" className="faculty">
            <li >HealthBot</li>
          </Link>
          <Link to="https://nut-class.onrender.com/" className="speaker">
            <li>Know Your Diet</li>
          </Link>
          <button id='logout_btn' type='submit' onClick={logOut}>LOG OUT</button>
        </ul>
        <button className='mobile-menu-icon' onClick={()=> setIsMobile(!isMobile)}>
          {isMobile? <ImCross /> : <GiHamburgerMenu />
}
        </button>

        </nav>
      
  );
};

export default Navbar;