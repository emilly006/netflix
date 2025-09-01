import React from "react";
import "./CardFilme.css"; // Opcional: CSS para estilizar o card

const CardFilme = ({ filme }) => {
  return (
    <div className="card-filme">
      <img src={filme.poster} alt={filme.titulo} className="poster-filme"/>
      <h3>{filme.titulo}</h3>
      <p>{filme.ano}</p>
      <p>{filme.genero}</p>
    </div>
  );
};

export default CardFilme;
