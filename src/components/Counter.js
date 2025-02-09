import React, { useState, useEffect } from "react";
import Message from "./Message"; // Importer le composant Message

const Counter = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date();
    targetDate.setMonth(1); // Février (les mois commencent à 0)
    targetDate.setDate(14); // 14ème jour
    targetDate.setHours(18, 0, 0, 0); // 18h00m00s

    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="counter text-center">
      {" "}
      {/* Ajouter text-center pour centrer le texte */}
      <Message text="Pas de réseaux sociaux avant" />{" "}
      {/* Utiliser le composant Message */}
      {Object.keys(timeLeft).length > 0 ? (
        <span className="align-middle">
          {" "}
          {/* Ajouter align-middle pour aligner verticalement */}
          {timeLeft.days}j {timeLeft.hours}h {timeLeft.minutes}m{" "}
          {timeLeft.seconds}s
        </span>
      ) : null}
    </div>
  );
};

export default Counter;
