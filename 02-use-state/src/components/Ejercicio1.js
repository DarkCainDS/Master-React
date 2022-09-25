import { useState } from "react";
import React from 'react';
import  PropTypes  from 'prop-types';

export const Ejercicio1 = ({year}) => {

  const [yearNow, setYearNow] = useState(year);

  const siguiente = e => {
    setYearNow(yearNow+1);
  }
  const anterior = e => {
    let operacion = yearNow - 1 ;
    setYearNow(operacion);
  }
  const cambiarYear = e => {
    let dato = parseInt(e.target.value);

    if(Number.isInteger(dato)){
       setYearNow(dato);
    }else{
      setYearNow(year);
    }
   
  }

  return (
    <div>
        <h1>Ejercicio coon evento y use state</h1>

        <strong className="label label-green">{yearNow}</strong>
        <br/>

        <input type="text" onChange={cambiarYear} placeholder='asignar año' />
        <br/>

        <button onClick={anterior} >Año anterior</button> &nbsp; 
        <button onClick={siguiente}>Año siguiente </button>
    </div>
  )
}

Ejercicio1.propTypes = {
  year:PropTypes.number.isRequired
}

