import React from "react";

export default function Card({onClose,name,min,max,img}) {
  // acá va tu códig
  return (
    <>
      <button onClick={onClose}>X</button>
      <h4>{name}</h4>
        <p>Min</p>
        <p>{min}</p>
        <p>Max</p>
        <p>{max}</p>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Imagen de clima"/>
        <hr />
    </>
  );
}
