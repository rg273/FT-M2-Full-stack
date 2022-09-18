import React from 'react';
import estilos from './Card.module.css'

export default function Card({onClose,name,min,max,img}) {
  // acá va tu código
  return (
    <div className={estilos.mainContainer}>
      <button className={estilos.btn_close} onClick={onClose}>X</button>
      <h4 className={estilos.titulo}>{name}</h4>
      <div className={estilos.info_container}>
        <div>
          <p className={estilos.subtitulo}>Min</p>
          <p className={estilos.number}>{min}</p>
        </div>
        <div>
          <p className={estilos.subtitulo}>Max</p>
          <p className={estilos.number}>{max}</p>
        </div>
        <div className={estilos.cat}>
          <img className={estilos.imageeen} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Imagen de clima"/>
        </div>
      </div>
    </div>
  );
};
