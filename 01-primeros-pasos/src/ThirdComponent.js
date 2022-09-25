import React from 'react';
import  PropTypes  from 'prop-types';

export const ThirdComponent = (/*props*/ {nombre,apellido,juegosFav}) => {

    console.log(nombre)
  return (
     

    <div>
        
        <h1>Comunicacion entre componentes</h1>
        <ul>
            <li>
                {juegosFav.nintendo}<br/>
                {juegosFav.playstation}<br/>
                {juegosFav.xbox}<br/>
                {nombre}<br/>
                {apellido}
            </li>
        </ul>
    </div>
  )
}
ThirdComponent.propTypes ={
    nombre:PropTypes.string.isRequired,
    apellido:PropTypes.string,
    juegosFav:PropTypes.object,
}
ThirdComponent.defaultProps= {
    nombre:"Dark",
    apellido:"Cain"
}