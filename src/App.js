import React from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';

// import { FcGoogle } from 'react-icons/fc';
// import Button from './components/Button';
//import Avatar from './components/Avatar';

import "./style.css"

export default function App() {
    return(

        <BrowserRouter>
        <header>
        <nav>
            <Link to="/">#VANLIFE</Link>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>

        </header>
       
        <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/about" element={<About />}/>
        </Routes>
       </BrowserRouter>
   
    )}

    