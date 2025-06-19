import React from "react";
import "./about.scss";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        <h1>About Us</h1>
        <p>
          Welcome to , a leading company in HomiFi. Our mission is to provide excellent services and innovative solutions that improve lives and businesses globally.
        </p>

        <div className="team">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="/team-member1.jpg" alt="Team Member 1" />
              <h3>John Doe</h3>
              <p>CEO</p>
            </div>
            <div className="team-member">
              <img src="/team-member2.jpg" alt="Team Member 2" />
              <h3>Jane Smith</h3>
              <p>Chief Technology Officer</p>
            </div>
            <div className="team-member">
              <img src="/team-member3.jpg" alt="Team Member 3" />
              <h3>Michael Brown</h3>
              <p>Marketing Director</p>
            </div>
          </div>
        </div>

        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            Our goal is to revolutionize the HomiFi by delivering user-friendly, efficient, and effective solutions that drive success for our clients and partners. We strive to foster innovation, creativity, and excellence in all our endeavors.
          </p>
        </div>

        <div className="values">
          <h2>Our Values</h2>
          <ul>
            <li>Integrity: We believe in doing the right thing, always.</li>
            <li>Innovation: We constantly push boundaries to create new solutions.</li>
            <li>Collaboration: We value teamwork and the power of working together.</li>
            <li>Excellence: We strive to be the best in everything we do.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
