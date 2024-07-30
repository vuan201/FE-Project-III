import React from "react";
import "./StyleImageCard.css";

const StyleImageCard = ({ data }) => {
  const { id, image } = data;
  return (
    <div className="StyleImageCard mx-2">
      <div className="StyleImageCardContent hover:brightness-90">
        <img src={image} />
      </div>
    </div>
  );
};

export default StyleImageCard;
