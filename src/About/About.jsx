import React from 'react';
import './About.css';

function About() {
  const sections = [
    {
      title: "What is this Course About?",
      content: [
        "This course is designed to prepare you for real-world tech placements through hands-on projects, live coding sessions, and expert mentorship.",
        "It focuses on mastering the core fundamentals of programming, data structures, system design, and interview strategies to make you job-ready."
      ]
    },
    {
      title: "Why Should You Join?",
      content: [
        "The course curriculum is curated by top industry professionals with real hiring experience.",
        "By joining, you get access to a peer community, mock interviews, and resume reviews – everything you need to ace tech placements."
      ]
    },
    {
      title: "Who is this Course For?",
      content: [
        "Whether you're a beginner aiming to break into tech, or an intermediate developer looking for structured prep – this course fits both.",
        "All you need is curiosity, consistency, and a willingness to grow."
      ]
    }
  ];

  return (
    <div className="about-section">
      <h2 className="about-heading">About This Course</h2>
      {sections.map((item, index) => (
        <div className="about-block" key={index}>
          <h3>{item.title}</h3>
          <div className="about-content">
            {item.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
  
}

export default About;
