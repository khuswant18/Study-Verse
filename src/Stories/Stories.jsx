import React from 'react';
import './Stories.css';

function Stories() {
  const students = [
    {
      name: "Aarav Mehta",
      course: "Full Stack Web Development",
      quote: "I landed a job at Infosys within 2 months of completing the course!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sneha Kapoor",
      course: "Data Science & ML",
      quote: "This course changed my life. Now working at a top AI startup!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Rohan Das",
      course: "Frontend Development",
      quote: "The hands-on projects helped me build a strong portfolio.",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  ];

  return (
    <div className="success-container">
      <div className="main-container">
        <div className="success-header">
          <h2 className="success-title">From Learners to Achievers</h2>
          <p className="success-description">Real stories from our successful students</p>
        </div>

        <div className="stories-cards">
          {students.map((student, index) => (
            <div className="story-wrapper" key={index}> 
              <div className="story-image">
                <img src={student.image} alt={student.name} />
              </div>
              <div className="story-body">
                <h3 className="student-name">{student.name}</h3>
                <p className="student-course">{student.course}</p>
                <p className="student-quote">“{student.quote}”</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stories;
