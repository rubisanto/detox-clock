import React from "react";

const Message = ({ text }) => {
  return <p className="text-4xl font-bold text-center mb-4">{text}</p>; // Modifier la classe Tailwind pour doubler la taille du texte
};

export default Message;
