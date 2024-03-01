import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
import Home from './Home.jsx';
import Service from './Service.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Navbar from "./Navbar.jsx";

const App = () => {
    return (
       <>
       <Navbar/>
       <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/service" element={<Service/>} />
       </Routes>
       
       </>
    );
};

export default App;
