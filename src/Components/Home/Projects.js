
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import to_do_list from '../../assets/my-projects-images/todolist.webp';
import numbergussing from '../../assets/my-projects-images/numbergussing.jpg';

function Projects(){

  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false,
      });
    }, []);

    return(
        <>
<div className="container px-4 py-5" id="custom-cards">
    <h2 className="pb-2 border-bottom" data-aos="fade-down">My Projects</h2>

    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div className="col bg-success " data-aos="fade-up">
        <div className="card card-cover h-100 overflow-hidden text-dark bg-success rounded-5 shadow-lg" style={{backgroundColor:"green"}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-dark " data-aos="flip-right">To Do List</h2>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src={to_do_list} alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"></img>
              </li>
              <li className="d-flex align-items-center me-3">
                <svg className="bi me-2" width="1em" height="1em"><use href="#geo-fill"></use></svg>
                <small className="text-dark">To do list</small>
              </li>
              
            </ul>
          </div>
        </div>
      </div>

      <div className="col bg-primary" data-aos="fade-down">
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"  style={{backgroundColor:"green"}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-dark" data-aos="flip-left">Number Guessing</h2>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src={numbergussing} alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"></img>
              </li>
              <li className="d-flex align-items-center me-3">
                <svg className="bi me-2" width="1em" height="1em"><use href="#geo-fill"></use></svg>
                <small className="text-dark">Number guessing</small>
              </li>
              
            </ul>
          </div>
        </div>
      </div>

      <div className="col bg-danger" data-aos="fade-up">
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: "url('unsplash-photo-3.jpg')"}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-dark" data-aos="flip-right">Coming soon...</h2>
            <ul className="d-flex list-unstyled mt-auto">
              {/* <li className="me-auto">
                <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"></img>
              </li>
              <li className="d-flex align-items-center me-3">
                <svg className="bi me-2" width="1em" height="1em"><use href="#geo-fill"></use></svg>
                <small>California</small>
              </li>
              <li className="d-flex align-items-center">
                <svg className="bi me-2" width="1em" height="1em"><use href="#calendar3"></use></svg>
                <small>5d</small>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
    );
}

export default Projects;