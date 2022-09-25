import React from 'react'

export const FourthComponent = () => {

    const hasDadoClick = (e, nombre) => {
        alert("Has dado click en el boton " + nombre);
    }
    function hasDadoDobleClick(e, nombre) {
        alert("Has dado doble Click " + nombre);
    }
    const hasEntrado = (e) => {
        alert("Haz entrado a la caja con el mousse")
    }
    const hasSalido = (e) => {
        alert("Haz salido a la caja con el mousse")
    }
    const estasDentro = (e) => {
        
        console.log("Estas dentro del input, introduce tu nombre")
    }
    const estasFuera = e =>{
        alert("Estas fuera")
    }
    return (
        <div>
            <h1>Eventos en React</h1>
            <p>
                {/*Evento CLick*/}
                <button onClick={e => hasDadoClick(e, "DarkCain")}>Dame click</button>
            </p>
            <p>
                {/*Evento doble CLick*/}
                <button onDoubleClick={e => hasDadoDobleClick(e, "DarkCain")}>Dame click doble</button>
            </p>
            <div id="caja" onMouseEnter={ hasEntrado} onMouseLeave={ hasSalido} >
                {/*Entrar onMousseEnter onMousseLeave*/}
                pasa por encima!!!
            </div>

        <p>
            <input type="text" onFocus={ estasDentro} onBlur={estasFuera} placeHolder="Introduce tu nombre..."></input>
        </p>
        </div>
    )
}
