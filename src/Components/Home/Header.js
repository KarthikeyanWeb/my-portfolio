// import React from "react";
// import my_pics from '../../assets/my-pics/karthikeyan.jpg';
// import { Link } from 'react-router-dom';

// function Header(){

//     return (
//     <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom sticky-top " style={{

//           fontFamily: "Poppins, sans-serif",
//           borderColor: "black",
//           boxShadow: "0 4px 6px -2px rgba(0, 0, 0, 0.2)"
//         }}>
//       <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        
//       <div className="d-flex justify-content-center align-items-center gap-3"> <img src={my_pics} id="pic" width="60" height="60" alt="my pic" style={{borderRadius: "50%", fontFamily: "Poppins, sans-serif", borderColor: "black"}}></img> 
//         <span className="fs-4">Karthikeyan Shanmugaraj</span>
//       </div>
//       </a>
      

//       <ul className="nav nav-pills">
//   <li className="nav-item">
//     <Link to="/" className="nav-link" aria-current="page">Home</Link>
//   </li>
//   <li className="nav-item">
//     <Link to="/about" className="nav-link">About</Link>
//   </li>
//   <li className="nav-item">
//     <Link to="/skills" className="nav-link">Skills</Link>
//   </li>
//   <li className="nav-item">
//     <Link to="/projects" className="nav-link">Projects</Link>
//   </li>
//   <li className="nav-item">
//     <Link to="/contact" className="nav-link">Contact info</Link>
//   </li>
// </ul>

//     </header>
//     );
// }

// export default Header;

import React, { useState } from "react";
import my_pics from '../../assets/my-pics/karthikeyan.jpg';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const location = useLocation();

  const toggleNav = () => setIsNavCollapsed(!isNavCollapsed);
  const handleNavClick = () => setIsNavCollapsed(true);

  return (
    <nav
      className="navbar container-fluid navbar-expand-lg navbar-light bg-white sticky-top py-0"
      style={{
        fontFamily: "Poppins, sans-serif",
        boxShadow: "0 4px 6px -2px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src={my_pics}
            width="50"
            height="50"
            alt="Profile"
            style={{
              borderRadius: "50%",
              marginRight: "10px",
              border: "1px solid black",
            }}
          />
          <span className="fs-5 fw-semibold">Karthikeyan Shanmugaraj</span>
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={toggleNav}
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          {isNavCollapsed ? (
            <span className="navbar-toggler-icon"></span>
          ) : (
            <span style={{ fontSize: "1.5rem", lineHeight: "1" }}>×</span>
          )}
        </button>

        <div
          className={`navbar-collapse ${isNavCollapsed ? 'collapse' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/skills", label: "Skills" },
              { to: "/projects", label: "Projects" },
              { to: "/contact", label: "Contact Info" },
            ].map(({ to, label }) => (
              <li className="nav-item" key={to}>
                <Link
                  to={to}
                  className={`nav-link ${location.pathname === to ? 'active' : ''}`}
                  onClick={handleNavClick}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
