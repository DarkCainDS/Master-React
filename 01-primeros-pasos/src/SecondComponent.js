import React from 'react'

export const SecondComponent = () => {

    let libros = ["Harry Potter", "The Lord of the Ring", "Clean code", "Dean koontz"];
    //let libros = [];
    return (

        <div className='segundo-componente'>
            {/*si se cumple la condicion haz esto*/}
            <h1>Listado de libros</h1>

            {libros.length >= 1 ? 
            (<ul>
                    {libros.map((libro, indice) => {
                        return <li key={indice}> {libro} </li>
                    })
                    }
                </ul>)
                //si no haz esto
                : (<p>No hay libros</p>)
            }
        </div>

    )
}


