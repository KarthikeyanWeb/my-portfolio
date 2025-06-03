// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import my_pics from "../../assets/my-pics/karthikeyan.jpg";
// import Header from './Header.js';



// function Home(){
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: false,
//     });
//   }, []);
//     return (
// <>
//    <div className="container mt-5" data-aos="fade-up">
//      <div className="row">
//       <div className="col-md-6">
//       <h1 className="display-5  text-dark" data-aos="fade-right">Karthikeyan</h1>
//       <p className="col-md-8 text-justify" data-aos="flip-left">Using a series of utilities, you can create this jumbotron, 
//     just like the one in previous versions of Bootstrap.
//     Check out the examples below for how you can remix and restyle it to your liking.</p>

//     <button type="button" className="btn btn-outline-dark btn-lg px-4 me-sm-3 fw-bold" style={{border: "#198745 1px solid",
//     boxShadow: "0 4px 6px -2px rgba(0, 0, 0, 0.2)"}} data-aos="fade-right">Hire me</button>
//           <button type="button" className="btn btn-outline-dark btn-lg px-4" style={{boxShadow: "0 4px 6px -2px rgba(0, 0, 0, 0.2)"}} data-aos="fade-left">Download CV</button>

//           <hr style={{ borderRadius: "2px solid #198745", marginTop: "39px" ,width: "50%"}}></hr>
//     <a href="http://www.instagram.com/mr_ambiverttt_" target="_blank" className="btn d-flex align-items-center gap-2" style={{color: "black"}}>
 
//     <i className="bi bi-instagram" style={{color:"black"}}></i>
//  Follow me on Instagram</a>

//  <a href="https://youtube.com/@karthikeyan-kh8kq?si=fhJppgs20U8ZSNUW" target="_blank" className="btn d-flex align-items-center gap-2" style={{color: "black"}}>
 
//     <i className="bi bi-youtube" style={{color:"red"}}></i>
//  Subscribe My channel on YouTube</a>

//  <a href="https://github.com/KarthikeyanWeb" target="_blank" className="btn d-flex align-items-center gap-2" style={{color: "black"}}>
 
//     <i className="bi bi-github" style={{color:"black"}}></i>
//  Follow me on GitHub</a>
//       </div>
//     <div className="col-md-6">
   
//     <img src={my_pics} className="rounded-circle border border-4 border-success shadow" data-aos="flip-left" style={{borderRadius: "100%"}} width="400" height="400"  alt="my pic"></img>
//   </div>
// </div>
//   </div>

// </>

//     );
// }

// export default Home;


import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import my_pics from "../../assets/my-pics/karthikeyan.jpg";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="container-fluid px-3 px-md-5 mt-5 overflow-hidden" data-aos="fade-up">
      <div className="row align-items-center gx-0">
        {/* Left Text Content */}
        <div className="col-lg-6 col-md-12 mb-4 text-center text-lg-start">
          <h1 className="display-5 text-dark" data-aos="fade-right">Karthikeyan</h1>
          <p className="text-start" data-aos="flip-left">
       I am a passionate Web Developer and Content Creator dedicated to building engaging, 
       user-friendly websites and digital experiences. With a strong foundation in front-end and back-end technologies, 
       I craft responsive and efficient web solutions that meet client needs. Alongside coding,
        I create valuable content that educates,
        inspires, and connects with audiences across various platforms. Driven by creativity and technical expertise, 
       I continuously learn and innovate to deliver high-quality results in both development and content creation.
          </p>

          {/* Buttons */}
          <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mt-3">
            <button
              type="button"
              className="btn btn-outline-dark btn-lg px-4 fw-bold"
              style={{
                border: "#198745 1px solid",
                boxShadow: "0 4px 6px -2px rgba(0, 0, 0, 0.2)"
              }}
              data-aos="fade-right"
            >
              Hire me
            </button>

            <a
  href="/KARTHIK.pdf"
  download="KARTHIK.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  <button
    type="button"
    className="btn btn-outline-dark btn-lg px-4"
    style={{
      boxShadow: "0 4px 6px -2px rgba(0, 0, 0, 0.2)"
    }}
    data-aos="fade-left"
  >
    Download CV
  </button>
</a>



          </div>

          {/* Line & Socials */}
          <hr style={{
            borderTop: "2px solid #198745",
            marginTop: "30px",
            width: "50%",
            marginLeft: 0
          }} />

          <div className="d-flex flex-column gap-2 mt-3 align-items-center align-items-lg-start">
            <a href="http://www.instagram.com/mr_ambiverttt_" target="_blank" rel="noopener noreferrer" className="btn d-flex align-items-center gap-2" style={{ color: "black", wordBreak: "break-word" }}>
              <i className="bi bi-instagram" style={{ color: "black" }}></i>
              Follow me on Instagram
            </a>

            <a href="https://youtube.com/@karthikeyan-kh8kq?si=fhJppgs20U8ZSNUW" target="_blank" rel="noopener noreferrer" className="btn d-flex align-items-center gap-2" style={{ color: "black", wordBreak: "break-word" }}>
              <i className="bi bi-youtube" style={{ color: "red" }}></i>
              Subscribe My channel on YouTube
            </a>

            <a href="https://github.com/KarthikeyanWeb" target="_blank" rel="noopener noreferrer" className="btn d-flex align-items-center gap-2" style={{ color: "black", wordBreak: "break-word" }}>
              <i className="bi bi-github" style={{ color: "black" }}></i>
              Follow me on GitHub
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="col-lg-6 col-md-12 text-center">
          <img
            src={my_pics}
            className="rounded-circle border border-4 border-success shadow img-fluid"
            data-aos="flip-left"
            alt="my pic"
            style={{ maxWidth: "300px", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
