import React from "react";
import "./index.css";

function Card({ data, index, mode }) {
  return (
    <div className="card">
      {data.title}
      {data.text}
    </div>
  );
}

export default Card;
