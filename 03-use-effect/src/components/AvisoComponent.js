import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect( () => {
        //CUANDO SE MONTA EL COMPONENTE
        alert("El componente esta MONTADOO !!!");

        //CUANDO SE DESMONTA
        return () => {
            alert("COMPONENTE DESMONTADO!!!");
        };
    },[]); 



  return (
    <div>
        <hr />
        <h3>Saludos Diego ?como va ¿</h3>
        <button onClick={e => {
            alert("Bienvenido !!!")
        }}>Mostrar alerta</button>



    </div>
  )
}
