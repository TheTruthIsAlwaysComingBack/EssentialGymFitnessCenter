import React from "react";
import { useNavigate } from "react-router-dom";

const Arrow = () => {
  const navigate = useNavigate();

  return (
    <svg
      onClick={() => navigate(-1)}
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fd0054"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left"
      style={{ cursor: "pointer" }}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12h14" />
      <path d="M5 12l4 4" />
      <path d="M5 12l4 -4" />
    </svg>
  );
};

export default Arrow;
