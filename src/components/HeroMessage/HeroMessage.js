import React from "react";
import "./HeroMessage.css";
const HeroMessage = ({ value, HandleClear }) => {
  return (
    <div>
      <div className="hero-message">
        <h2>Message</h2>
        <button className="hero-message__clear" onClick={HandleClear}>
          Clear messages
        </button>
        <div>
          {value.map((item) => (
            <p>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroMessage;
