import React, {useState} from 'react'

export const FirstState = () => {
    /*
    let nombre = "Diego Romero";
    const cambiarNombre = e => {
        nombre = "DarkCain"
    }
    */

    const [ nombre, setNombre ] = useState("Diego Romero");
    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo);
        console.log(e.target);
    }

  return (
    <div>
        <h3>Componente: Mi primer Estado</h3>
        <strong className='label'>{nombre}</strong>
        &nbsp;
        <button onClick={ e => cambiarNombre(e,"DarkCain")}>Cambiar por nombre Web </button>
        <input type="text" onChange={e => cambiarNombre(e, e.target.value)} placeholder='Cambiar el nombre' />
    </div>
  )
}
