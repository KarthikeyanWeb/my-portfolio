import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About(){
useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
    return(
<>

<div className="p-5 mb-4 rounded-3" data-aos="fade-up" style={{ backgroundColor: "#129990" }}>
      <div className="container-fluid py-5">
        <h1 className="display-5 text-dark ">About</h1>
        <p className="col-md-8 fs-5"><small>Hi am karthikeyan from chennai. I have done my BSC (cs) 
            degree in SCP jain college in the year 2020.college didn't teach real knowledge of technology...
            these matter i realized after completed my degree.then am started self learning of technology now am 
            learning web engineering from SNA (Selfmade Ninja Academy)
        about SNA- SNA is World's First Teach Academy With A Virtual Private Network.my goal is become a web developer</small></p>
      </div>
    </div>


  <div className="col-md-8">
      <h3 className="p-4 mb-4 text-dark">
        Education
      </h3>


      <div className=".row.cols-md-4" data-aos="flip-left">
        <div className="h-100 p-5 rounded-3" style={{ backgroundColor: "#129990" }}>
            <div className='p-3'>
 <p>SNA (Selfmade Ninja Academy)</p>
          <h2>Web engineering</h2>
          <p>learning web engineering from SNA (Selfmade Ninja Academy)
        about SNA- SNA is World's First Teach Academy With A Virtual Private Network</p>
            </div>
         
        </div>
      </div>
      <hr/>
      <div className=".row.cols-md-4" data-aos="flip-right">
        <div className="h-100 p-5  rounded-3" style={{ backgroundColor: "#129990" }}>
            <div className='p-3'>
        <p>SCP Jain College</p>
          <h2>BSC Computer Science</h2>
          <p>Affiliated to Madras University, iam completed bsc
             computer science degree in scp jain college..and i enjoyed my college 
             life with my friends.</p>
             </div>
        </div>
      </div>
<hr/>
      <div className=".row.cols-md-4" data-aos="flip-left">
        <div className="h-100 p-5  rounded-3" style={{ backgroundColor: "#129990" }}>
             <div className='p-3'>
        <p>V.C.H.S.School</p>
          <h2>Higher Secondary</h2>
          <p>In a schooling environment where freedom and extra curricular is considered as
             equal as curricular and co-curricular activities, I was able to understand life.</p>
              </div>
        </div>
      </div>
      
 </div>
</>

    );
}

export default About;