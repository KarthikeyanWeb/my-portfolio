import React from "react";
import my_pics from '../../assets/my-pics/karthikeyan.jpg';
import { Link } from 'react-router-dom';

function Header(){

    return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom sticky-top " style={{

          fontFamily: "Poppins, sans-serif",
          borderColor: "black",
          boxShadow: "0 4px 6px -2px rgba(0, 0, 0, 0.2)"
        }}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        
      <div className="d-flex justify-content-center align-items-center gap-3"> <img src={my_pics} id="pic" width="60" height="60" alt="my pic" style={{borderRadius: "50%", fontFamily: "Poppins, sans-serif", borderColor: "black"}}></img> 
        <span className="fs-4">Karthikeyan Shanmugaraj</span>
      </div>
      </a>
      

      <ul className="nav nav-pills">
  <li className="nav-item">
    <Link to="/" className="nav-link" aria-current="page">Home</Link>
  </li>
  <li className="nav-item">
    <Link to="/about" className="nav-link">About</Link>
  </li>
  <li className="nav-item">
    <Link to="/skills" className="nav-link">Skills</Link>
  </li>
  <li className="nav-item">
    <Link to="/projects" className="nav-link">Projects</Link>
  </li>
  <li className="nav-item">
    <Link to="/contact" className="nav-link">Contact info</Link>
  </li>
</ul>

    </header>
    );
}

export default Header;