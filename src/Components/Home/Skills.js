// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// function Skills() {
// useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: false,
//     });
//   }, []);
//     return (

//         <div className="about-skills d-flex flex-column justify-content-sm-center align-middle vh-100">
//   <h4 className="my-2 fs-1 text-dark text-center fw-bolder" data-aos="fade-down">Programming skills</h4>
//   <div className="skills-wrappers">
//     <div className="col-sm-6" data-aos="fade-up">
//       <div className="skills-items">
//         <h6 className="text-dark">HTML and css</h6>
//         <div className="skills-progress">
//           <div className="skills-progress-bar photoshop">
//             <span>90%</span>
//           </div>
//         </div>
//       </div>
//       <div className="skills-items">
//         <h6 className="text-dark">C</h6>
//         <div className="skills-progress">
//           <div className="skills-progress-bar illustrator">
//             <span>80%</span>
//           </div>
//         </div>
//       </div>
//       <div className="skills-items">
//         <h6 className="text-dark">JAVA</h6>
//         <div className="skills-progress">
//           <div className="skills-progress-bar figma">
//             <span>75%</span>
//           </div>
//         </div>
//       </div>
//     </div>
//      {/* Column 2 */}
//     <div className="col-sm-6" data-aos="fade-up">
//       <div className="skills-items">
//         <h6 className="text-dark">PHP</h6>
//         <div className="skills-progress">
//           <div className="skills-progress-bar html">
//             <span>65%</span>
//           </div>
//         </div>
//       </div>
//       <div className="skills-items">
//         <h6 className="text-dark">Javascript</h6>
//         <div className="skills-progress">
//           <div className="skills-progress-bar javascript">
//             <span>45%</span>
//           </div>
//         </div>
//       </div>

//       <div className="skills-items">
//         <h6 className="text-dark">SQL</h6>
//         <div className="skills-progress">
//           <div className="skills-progress-bar react">
//             <span>55%</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//     );
// }

// export default Skills;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const skills = [
    { name: 'HTML & CSS', level: 90, class: 'bg-success' },
    { name: 'C', level: 80, class: 'bg-primary' },
    { name: 'Java', level: 75, class: 'bg-warning' },
    { name: 'PHP', level: 65, class: 'bg-info' },
    { name: 'JavaScript', level: 45, class: 'bg-danger' },
    { name: 'SQL', level: 55, class: 'bg-secondary' },
  ];

  return (
    <div className="container py-5">
      <h4 className="text-center fw-bold mb-5 fs-1 text-dark" data-aos="fade-down">
        Programming Skills
      </h4>
      <div className="row">
        {skills.map((skill, index) => (
          <div
            className="col-md-6 mb-4"
            key={skill.name}
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
          >
            <h6 className="text-dark">{skill.name}</h6>
            <div className="progress" style={{ height: '25px', backgroundColor: '#e9ecef' }}>
              <div
                className={`progress-bar ${skill.class}`}
                role="progressbar"
                style={{ width: `${skill.level}%`, fontWeight: '500' }}
                aria-valuenow={skill.level}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {skill.level}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
