import React, { useEffect } from "react";
import "./Home.css";
import ENQ from "../../assets/Enquiry.svg";
import DocT from "../../assets/Doc-Trial.svg";
import ChatAI from "../../assets/ChatAI.svg";
import CustomizedAccordions from "./FAQ";
import { Link } from "react-router-dom";
import Dashboard from "../../assets/dashboard.svg"

const Home = () => {
  useEffect(()=>{
    localStorage.removeItem("docs")
  })
  return (
    <div className="home_body">
    <div className="db">
        <img src={Dashboard} alt="HERO"/>
    </div>
      <div className="home_service_section">
        <div className="service_head">
          Services
        </div>
        <div className="home_services">
        <div className="cd card_1">
          <div className="serv_img">
            <img src={ENQ} alt="Enquiry_form" />
          </div>
          <div className="serv_head">
            Scan a Menu
          </div>
          <div className="serv_cont">
        It's a NutriScan powerhouse, serving as a BalancedPlate Detector and FitFood Inspector. The Wholesome Image Analyst ensures your dietary choices align with wellness goals. More than a scanner, it's a SmartNutrition Viewer, revealing intricate details in images for informed, healthy decisions.
          </div>
          <div className="serv_btn">
            <Link to="/upload" ><button type="submit">Scan Now</button></Link>
          </div>
        </div>
        <div className="cd card_1">
          <div className="serv_img">
            <img src={ChatAI} alt="ChatAI" />
          </div>
          <div className="serv_head">
            Your HealthBot
          </div>
          <div className="serv_cont">
          HealthBot is an intelligent companion delivering personalized dietary tips tailored to your health goals. This sophisticated bot provides concise, actionable advice on meal planning and nutritional balance. It's your virtual nutrition consultant, guiding you with precision toward a healthier lifestyle.
          </div>
          <div className="serv_btn">
            <Link to="/chat-ai"><button type="submit">Chat Now</button></Link>
          </div>
        </div>
        <div className="cd card_1">
          <div className="serv_img">
            <img src={DocT} alt="DocT" />
          </div>
          <div className="serv_head">
            Know Your Diet
          </div>
          <div className="serv_cont">
          The service offers as a revolutionary tool analyzing food healthiness from your ingredients. Share your list for ingredients and get a professional opinion about the food. It's serves you to take precise, informed dietary decisions.
          </div>
          <div className="serv_btn">
          <Link to="https://nut-class.onrender.com">
                <button type="submit">Get Info</button>
              </Link>
          </div>
        </div>
      </div>
      </div>
      <div className="faq">
        <div className="faq_head">
          Frequently Asked Questions (FAQs)
        </div>
      <CustomizedAccordions />
      </div>
    </div>
  );
};

export default Home;
