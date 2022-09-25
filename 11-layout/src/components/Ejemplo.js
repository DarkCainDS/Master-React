import React, { useLayoutEffect, useEffect, useState, useRef } from 'react'

export const Ejemplo = () => {

  const [mostrar, setMostrar] = useState(false);
  const box =useRef();
  const button =useRef();

  useLayoutEffect(() => {
    console.log("useLayoutEffect: Componente Cargado")

  }, []);

  useEffect(() => {
    console.log("useEffect: componente cargado !!!")
    if(box.current == null) return 

    const {bottom} = button.current.getBoundingClientRect();
    console.log(bottom);
    box.current.style.top = `${bottom + 50}px`;
    box.current.style.left = `${bottom + 20}px`;
    
  }, [mostrar]);


  return (
    <div>
      <h1>Ejemplos useEffect y useLayoutEffect</h1>
      
      <button ref={button} onClick={() => setMostrar(prev => {
        console.log(prev, !prev);
        return !prev;
      })}>Mostrar mensaje</button>
      
      {mostrar && (
        <div id="box" ref={box}>
          Hello Hackerman {mostrar}
        </div>
      )}

    </div>
  )
}
