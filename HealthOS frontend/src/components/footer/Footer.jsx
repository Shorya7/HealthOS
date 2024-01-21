import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import LOGO from '../../assets/logo.svg'

const Footer = () => {

  const linkStyle = {
    fontFamily: 'Inter, sans-serif', // Set font family to Inter for links
  };
  return (
    <footer className="text-center text-lg-start text-black" style={{backgroundColor: '#DFEEC6',
    overflowX: 'hidden',
    fontFamily: 'Inter, sans-serif', }}>
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}
        
        {/* Right */}
        <div>
          <a href="https://www.instagram.com/shorya_saini_7/" target="_blank" rel="noreferrer" className="me-4 text-reset"><FaInstagram fontSize={25} /></a>
          <a href="https://twitter.com/ShoryaS7" target="_blank" rel="noreferrer" className="me-4 text-reset"><BsTwitterX fontSize={25}/></a>
          <a href="https://www.linkedin.com/in/shorya-9b8b50241/" target="_blank" rel="noreferrer" className="me-4 text-reset"><FaLinkedin fontSize={25}/></a>
          
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}
      
      {/* Section: Links */}
      <section>
        <div className="container_foot text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 d-flex justify-content-center align-items-center">
    {/* Content */}
    <img src={LOGO} alt='HealthOS' style={{width:'160px'}} />
</div>
            {/* Grid column */}
            
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">
                Services
              </h6>
              <p><Link to="/upload" className="text-reset">Scan a Menu</Link></p>
  <p><Link to="/chat" className="text-reset">HealthBot</Link></p>
  <p><Link to="/doct/details" className="text-reset">Know your Diet</Link></p>
  {/* <p><Link to="/support" className="text-reset">Support</Link></p>
  <p><Link to="/chat-history" className="text-reset">Chat History</Link></p> */}
            </div>
            {/* Grid column */}
            
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p><a href="https://www.nih.gov/" target="_blank" rel="noreferrer" className="text-reset">NIH</a></p>
              <p><a href="https://planmeal.com/indian-food-table" target="_blank" rel="noreferrer"className="text-reset">Meal Planner</a></p>
              <p><a href="https://upsidehealth.in/" target="_blank" rel="noreferrer"className="text-reset">Upside Health</a></p>
              
            </div>
            {/* Grid column */}
            
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><FaLocationDot /> New Delhi -110070</p>
              <p><SiGmail /> healthos.queries@gmail.com</p>
              <p><FaPhoneAlt /> +91 9259XXXX07</p>
              <p><FaPhoneAlt /> +91 788XXXXX37</p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links */}
      
      {/* Copyright */}
      <div className="text-center p-4" style={{color:"black", backgroundColor: '#d5efad', fontFamily: 'Inter, sans-serif' }}>
        © 2024 Copyright: 
        <a className="text-reset fw-bold" href="https://whereuelevate.com/drills/bennett-university-industry-hackathon" target="_blank" rel="noreferrer" style={linkStyle}>
          Coded Minds @IndustryHackathon
        </a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
