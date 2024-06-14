import React, { useState, useEffect } from "react";
import CoachesSection from "./CoachesSection";
import "./CoachesPage.css";

const CoachesPage = () => {
  const [coach, setCoach] = useState(null);

  useEffect(() => {
    fetch("https://663d4e0617145c4d8c3937bf.mockapi.io/moreentrenadores")
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          const randomCoach = data[Math.floor(Math.random() * data.length)];
          setCoach(randomCoach);
        }
      });
  }, []);

  return (
    <div className="coaches-page">
      {coach ? <CoachesSection coaches={[coach]} /> : <p>Loading...</p>}
    </div>
  );
};

export default CoachesPage;
