import React from "react";

export default function Image({ src }) {
  
  if (!src) {
    return <div>Loading...</div>;
  }

  return (
    <div className="image">
      <img src={src} alt="Imagem"/>
    </div>
  );
};
