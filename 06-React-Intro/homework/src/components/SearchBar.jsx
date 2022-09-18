import React from "react";

export default function SearchBar(props) {
  // acá va tu código
  return (
    <>
      <input type="text" placeholder="Ciudad..." id="buscador" className="ciudad-nombre"/>
      <input type="button" value="Agregar" onClick ={()=>props.onSearch("buscando...")}/>
    </>
  );
}
