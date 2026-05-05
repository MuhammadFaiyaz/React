import React from "react";
import heroImg from "./assets/img/hero1.jpg";
import coach1 from "./assets/img/coach1.jpg";
import coach2 from "./assets/img/coach2.jpg";
import coach3 from "./assets/img/coach3.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-img-wrapper">
        <img src={heroImg} alt="Tennis players" className="hero-bg" />
        
        <div className="hero-overlay"></div>
        {/* Center Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Unleash Your Inner Champion Today. <br /> All In One Place.
          </h1>
          <p className="hero-subtitle">
            Join the ultimate tennis experience — where passion meets
            performance, <br />
            and every swing brings you closer to victory.
          </p>
          <button className="hero-btn">Start your own journey</button>
        </div>

        {/* Bottom Left */}
        <div className="hero-coaches">
          <div className="coach-avatars">
            <img src={coach1} alt="coach" />
            <img src={coach2} alt="coach" />
            <img src={coach3} alt="coach" />
          </div>
          <div className="hero-coaches-text">
            <p>Train with real professionals.</p>
            <p>Get the real results.</p>
          </div>
        </div>

        {/* Bottom Right */}
        <div className="hero-socials">
          <a href="#">
            Instagram <i className="ri-arrow-right-up-line"></i>
          </a>
          <a href="#">
            Facebook <i className="ri-arrow-right-up-line"></i>
          </a>
          <a href="#">
            Tik Tok <i className="ri-arrow-right-up-line"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
