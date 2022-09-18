import React from 'react';
import Card from './Card';
import s from './Cards.module.css'

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className={s.body_container}>
      {
        props.cities.map(current =>
        <Card 
          max={current.main.temp_max}
          min={current.main.temp_min}
          name={current.name}
          img={current.weather[0].icon}
          onClose={() => alert(current.name)}
          key = {current.id} //esto nose para que sirve
        ></Card>)
      }
    </div>)
};