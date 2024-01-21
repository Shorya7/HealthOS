import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Errorpage from '../error/Error404'
import SignUp from '../login/Signup'
import Login from '../login/Login'
import Navbar from "../navbar/Navbar"
import Footer from '../footer/Footer'
import ProtectedRoute from './ProtectedRoutes'
import Home from '../home/Home'
import Uploads from '../upload/Uploads'
import Response from '../response/Response'
import Chatbot from '../chatai/Chatbot'

const Routers = () => {


 
  return (
   <Router>
   
    <Routes>
      <Route path='/' element = {<><Navbar/><ProtectedRoute Component={Home} /><Footer /></>} />
      <Route path='/signup' element = {<SignUp />}/>
      <Route path='/login' element = {<Login />}/>
      <Route path='/upload' element = {<><Navbar/><ProtectedRoute Component={Uploads} /><Footer /></>} /> 
      <Route path='/chat-ai' element = {<><Navbar/><ProtectedRoute Component={Chatbot} /><Footer /></>} />
      <Route path='/response_diet' element = {<><Navbar/><ProtectedRoute Component={Response} /><Footer /></>} />
      <Route path='*' element = {<><Navbar/><Errorpage /><Footer /></>} />
    </Routes>
    
   </Router>
 
  )
}

export default Routers