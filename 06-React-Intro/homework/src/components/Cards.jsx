import React from 'react';
import Card from './Card';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  console.log(props)
  const cards = props.cities
  console.log(cards) 

  return (
  <>
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
  </>)
};