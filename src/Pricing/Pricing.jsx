import React from "react";
import "./Pricing.css";
import { FaCheckCircle } from "react-icons/fa";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="container">
        <h2 className="pricing-title">Our Pricing Plans</h2>
        <p className="pricing-description">Choose a plan that suits your needs</p>
        
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3 className="plan-title">Basic</h3>
            <p className="plan-price">$19/month</p>
            <ul className="features">
              <li><FaCheckCircle /> Feature One</li>
              <li><FaCheckCircle /> Feature Two</li>
              <li><FaCheckCircle /> Feature Three</li>
            </ul>
            <button className="choose-plan">Choose Plan</button>
          </div>

          <div className="pricing-card">
            <h3 className="plan-title">Pro</h3>
            <p className="plan-price">$49/month</p>
            <ul className="features">
              <li><FaCheckCircle /> Everything in Basic</li>
              <li><FaCheckCircle /> Priority Support</li>
              <li><FaCheckCircle /> Advanced Analytics</li>
            </ul>
            <button className="choose-plan">Choose Plan</button>
          </div>

          <div className="pricing-card">
            <h3 className="plan-title">Enterprise</h3>
            <p className="plan-price">Custom Pricing</p>
            <ul className="features">
              <li><FaCheckCircle /> All Pro Features</li>
              <li><FaCheckCircle /> Dedicated Manager</li>
              <li><FaCheckCircle /> SLA Support</li>
            </ul>
            <button className="choose-plan">Contact Us</button>
          </div>
        </div>

      </div>
    </div> 
  );
};
            
export default Pricing;
