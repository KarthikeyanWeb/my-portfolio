import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import my_pics from "../../assets/my-pics/karthikeyan.jpg";
import Header from './Header.js';



function Home(){
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
    return (
<>
   <div className="container mt-5" data-aos="fade-up">
     <div className="row">
      <div className="col-md-6">
      <h1 className="display-5  text-dark" data-aos="fade-right">Karthikeyan</h1>
      <p className="col-md-8 text-justify" data-aos="flip-left">Using a series of utilities, you can create this jumbotron, 
    just like the one in previous versions of Bootstrap.
    Check out the examples below for how you can remix and restyle it to your liking.</p>

    <button type="button" className="btn btn-outline-dark btn-lg px-4 me-sm-3 fw-bold" style={{border: "#198745 1px solid",
    boxShadow: "0 4px 6px -2px rgba(0, 0, 0, 0.2)"}} data-aos="fade-right">Hire me</button>
          <button type="button" className="btn btn-outline-dark btn-lg px-4" style={{boxShadow: "0 4px 6px -2px rgba(0, 0, 0, 0.2)"}} data-aos="fade-left">Download CV</button>

          <hr style={{ borderRadius: "2px solid #198745", marginTop: "39px" ,width: "50%"}}></hr>
    <a href="http://www.instagram.com/sibidharan" target="_blank" className="btn " style={{color: "black"}}>
 
    <i className="fa-brands fa-instagram" style={{color:"black"}}></i>
 Follow me on Instagram</a>
 
      </div>
    <div className="col-md-6">
   
    <img src={my_pics} className="rounded-circle border border-4 border-success shadow" data-aos="flip-left" style={{borderRadius: "100%"}} width="400" height="400"  alt="my pic"></img>
  </div>
</div>
  </div>

</>

    );
}

export default Home;