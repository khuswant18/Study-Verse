import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className="content">
    <section className="main-section">

    <div className="content-left">

     <div class="animation">Learn the Future. Code the Change</div>
     <p class="subheading">Empowering future developers, one line of code at a time.</p>


    </div>

    <div className="content-right">
      <div className="image-container">
      <video autoPlay loop muted playsInline className="section-image">
            <source src="./main-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
    </video>

      </div>
    </div>

  </section>
</div>

  )
}

export default Hero
