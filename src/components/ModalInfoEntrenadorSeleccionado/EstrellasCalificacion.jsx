import React from "react";
import "./EstrellasCalificacion.css";

const EstrellasCalificacion = ({ rating, onRate }) => (
  <div className="EstrellasCalificacion">
    {[...Array(5)].map((star, index) => (
      <span
        key={index}
        className={index < rating ? "star filled" : "star"}
        onClick={() => onRate(index + 1)}
      >
        ★
      </span>
    ))}
  </div>
);

export default EstrellasCalificacion;
