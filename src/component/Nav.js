import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Gempabumi from "../pages/Homepages/Gempabumi";
import Banjir from "../pages/Homepages/Banjir";
import Cuacaextrem from "../pages/Homepages/Cuacaextrem";
import Longsor from "../pages/Homepages/Longsor";
import Gunungapi from "../pages/Homepages/Gunungapi";
import Tsunami from "../pages/Homepages/Tsunami";


function Navbar(){
    return(
        <div class="">
            <Router>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <div class="col-10">
                        <a class="navbar-brand" href="#">Siap Bencana</a></div>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item konten_pad">
                                        <Link to="/" className="nav-link">Home</Link>
                                    </li>
                                    <li class="nav-item konten_pad">
                                        <Link to="/about" className="nav-link">About</Link>
                                    </li>
                                    
                                    <li class="nav-item konten_pad">
                                        <Link to="/contact" className="nav-link">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </nav>
                
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route path="gempabumi" element={<Gempabumi />} />
                        <Route path="banjir" element={<Banjir />} />
                        <Route path="longsor" element={<Longsor />} />
                        <Route path="gunungapi" element={<Gunungapi />} />
                        <Route path="tsunami" element={<Tsunami />} />
                        <Route path="cuacaextrem" element={<Cuacaextrem />} />
                    </Route>
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </div>
    );
}

export default Navbar;