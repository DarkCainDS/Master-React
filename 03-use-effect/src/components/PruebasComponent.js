import React, { useEffect, useState } from 'react'
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponent = () => {

  const [user, setUser] = useState("Diego Romero");
  const [fecha, setFecha] = useState("11-05-2022");
  const [counter, setCounter] = useState(0);

  const modUser = e => {
    setUser(e.target.value)
  };
  const changeDate = e => {
    //setFecha(new Date().toLocaleDateString());
    setFecha(Date.now());
  }
  //solo se ejecuta una vez al cargar el component
  useEffect( () =>{
    console.log("Has cargado el componente o has realizo un cambio en el estado");
  }, [])

    //solo se ejecuta si cambio al usuario
    useEffect( () =>{
      

        setCounter(counter+1);
        console.log("Has modificado el usuario !!!" + counter);


    }, [user, fecha]);

  return (
    <div>
      <h1>El efecto - Hook useEffect</h1>
      <h1  className={ counter >= 10 ? 'label label-green' : 'label'}>{user}</h1>
      <strong>{fecha}</strong>
      <p>


        <input type="text"
          onChange={modUser}
          placeholder="Cambia el nombre"></input>
          <br/>


          <button onClick={changeDate}>Cambiar Fecha</button>
      </p>
      { user == "DarkCain" && <AvisoComponent />}

    </div>
  )
}


