import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section id="features" className="features-section">
      <h2>Our Features</h2>
      <div className="features-grid">
        <div className="feature-card">
          <h3>Feature 1</h3>
          <p>Details about feature 1.</p>
        </div>
        <div className="feature-card">
          <h3>Feature 2</h3>
          <p>Details about feature 2.</p>
        </div>
        <div className="feature-card">
          <h3>Feature 3</h3>
          <p>Details about feature 3.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
