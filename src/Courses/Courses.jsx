import React from 'react';
import './Courses.css';

function Courses() {
  return (
    <div className="course-container">
      <div className="main-container">
        <div className="courses-header">
          <h2 className="courses-title">Courses</h2>
          <p className="courses-description">Choose a plan that suits your needs</p>
        </div>

        <div className="courses-cards">
          <div className="course-wrapper">
            <div className="course-image">
              <img src="./course-image-1.png" alt="Web Development" />
            </div>
            <div className="course-body">
              <div className="top">
                <h2 className="course-name">Web Development</h2>
                <div className="tags">
                  <h4>LIVE BATCH</h4>
                  <p>ENGLISH</p>
                </div>
              </div>
              <div className="bottom">
                <div className="left">
                  <span>LIMITED TIME DISCOUNT</span>
                  <div className="price">
                    <p>₹ 7999</p>
                  </div>
                </div>
                <div className="right">
                  <div className="offer">50% OFF</div>
                </div>
              </div>
            </div>
          </div>

          <div className="course-wrapper">
            <div className="course-image">
              <img src="./course-image-2.png" alt="DSA" />
            </div>
            <div className="course-body">
              <div className="top">
                <h2 className="course-name">Data Structures & Algorithm</h2>
                <div className="tags">
                  <p>ENGLISH</p>
                </div>
              </div>
              <div className="bottom">
                <div className="left">
                  <span>LIMITED TIME DISCOUNT</span>
                  <div className="price">
                    <p>₹ 3999</p>
                  </div>
                </div>
                <div className="right">
                  <div className="offer">20% OFF</div>
                </div>
              </div>
            </div>
          </div>

          <div className="course-wrapper">
            <div className="course-image">
              <img src="./course-image-3.png" alt="AI" />
            </div>
            <div className="course-body">
              <div className="top">
                <h2 className="course-name">Artificial Intelligence</h2>
                <div className="tags">
                  <p>ENGLISH</p>
                </div>
              </div>
              <div className="bottom">
                <div className="left">
                  <span>LIMITED TIME DISCOUNT</span>
                  <div className="price">
                    <p>₹ 4999</p>
                  </div>
                </div>
                <div className="right">
                  <div className="offer">12% OFF</div>
                </div>
              </div>
            </div>
          </div>

          <div className="course-wrapper">
            <div className="course-image">
              <img src="./course-image-4.png" alt="Frontend" />
            </div>
            <div className="course-body">
              <div className="top">
                <h2 className="course-name">Frontend Development</h2>
                <div className="tags">
                  <p>ENGLISH</p>
                </div>
              </div>
              <div className="bottom">
                <div className="left">
                  <span>LIMITED TIME DISCOUNT</span>
                  <div className="price">
                    <p>₹ 2999</p>
                  </div>
                </div>
                <div className="right">
                  <div className="offer">30% OFF</div>
                </div>
              </div>
            </div>
          </div>

          <div className="course-wrapper">
            <div className="course-image">
              <img src="./course-image-5.png" alt="Backend" />
            </div>
            <div className="course-body">
              <div className="top">
                <h2 className="course-name">Backend Development</h2>
                <div className="tags">
                  <h4>LIVE BATCH</h4>
                  <p>ENGLISH</p>
                </div>
              </div>
              <div className="bottom">
                <div className="left">
                  <span>LIMITED TIME DISCOUNT</span>
                  <div className="price">
                    <p>₹ 9999</p>
                  </div>
                </div>
                <div className="right">
                  <div className="offer">39% OFF</div>
                </div>
              </div>
            </div>
          </div>

          <div className="course-wrapper">
            <div className="course-image">
              <img src="./course-image-6.png" alt="Java & DSA" />
            </div>
            <div className="course-body">
              <div className="top">
                <h2 className="course-name">JAVA & DSA</h2>
                <div className="tags">
                  <p>ENGLISH</p>
                </div>
              </div>
              <div className="bottom">
                <div className="left">
                  <span>LIMITED TIME DISCOUNT</span>
                  <div className="price">
                    <p>₹ 6999</p>
                  </div>
                </div>
                <div className="right">
                  <div className="offer">60% OFF</div>
                </div>
              </div>
            </div>
          </div>

          <div className="course-wrapper">
            <div className="course-image">
              <img src="./course-image-7.png" alt="Java & DSA" />
            </div>
            <div className="course-body">
              <div className="top">
                <h2 className="course-name">Aptitude</h2>
                <div className="tags">
                  <p>ENGLISH</p>
                </div>
              </div>
              <div className="bottom">
                <div className="left">
                  <span>LIMITED TIME DISCOUNT</span>
                  <div className="price">
                    <p>₹ 2999</p>
                  </div>
                </div>
                <div className="right">
                  <div className="offer">12% OFF</div>
                </div>
              </div>
            </div>
          </div>

          <div className="course-wrapper">
            <div className="course-image">
              <img src="./course-image-8.png" alt="Java & DSA" />
            </div>
            <div className="course-body">
              <div className="top">
                <h2 className="course-name">Reasoning</h2>
                <div className="tags">
                  <p>ENGLISH</p>
                </div>
              </div>
              <div className="bottom">
                <div className="left">
                  <span>LIMITED TIME DISCOUNT</span>
                  <div className="price">
                    <p>₹999</p>
                  </div>
                </div>
                <div className="right">
                  <div className="offer">10% OFF</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Courses;