import React from "react";
import "../scss/Card.css";
function Card({ img, title, des }) {
  return (
    <div className="cardItem">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{des}</p>
    </div>
  );
}

export default Card;
