import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <section className="home">
        <div className="home-content">
          <h1>Dream Teams</h1>
          <p>
            Get dream teams
            <br />
            Win <span>Daily</span>...!
          </p>
          <button>Join Us</button>
        </div>
        <div className="home-illustration">
          <img
            className="home-svg"
            src="images/home-undraw.svg"
            alt="illustration"
          />
        </div>
      </section>
      <section className="bottom-wave-design">
        <img src="images/Bottom-wave-design.svg" alt="wave" />
      </section>
    </div>
  );
}

export default Home;
