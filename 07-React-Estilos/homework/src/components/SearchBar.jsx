import React from 'react';
import s from './SearchBar.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={s.contenedor}>
      <input type="text" placeholder="Ciudad..." id="buscador"  className={s.ciudad_nombre}/>
      <input type="button" value="Agregar" className={s.btn_agg} onClick ={()=>props.onSearch("buscando...")}/>
    </div>
  );
};