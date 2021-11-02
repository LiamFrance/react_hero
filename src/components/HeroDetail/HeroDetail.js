import React from "react";
import "./HeroDetail.css";
const HeroDetail = ({ hero }) => {
  console.log("hero detail");
  return (
    <div>
      <h3>{hero.name}Detail:</h3>
      <div className="hero-detail">
        <span className="hero-detail__id">{hero.id}</span>
        <input id="hero-detail__name" type="text" value={hero.name} />
      </div>
    </div>
  );
};

export default HeroDetail;
