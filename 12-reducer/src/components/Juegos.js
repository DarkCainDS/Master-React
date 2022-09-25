import React, { useEffect, useReducer } from 'react'
import { JuegoReducer } from '../reducers/JuegoReducer';


const init = () => {
    return JSON.parse(localStorage.getItem("juegos")) || [];
}
export const Juegos = () => {

    const [juegos, dispatch] = useReducer(JuegoReducer, [], init);

    useEffect(() => {
        localStorage.setItem("juegos", JSON.stringify(juegos));
    }, [juegos]);

    const deleteMe = id => {
        const action = {
            type: "delete",
            payload: id
        };
        dispatch(action);
    }
    const edith = ( e, id )=> {
        console.log(e.target.value ,"edith",id)
        let juego = {

            id,
            title: e.target.value,
            description: e.target.value
        };
        const action = {
            type: "edith",
            payload: juego
        };
        dispatch(action);
    }
    const getFormGames = e => {
        e.preventDefault();

        let juego = {

            id: new Date().getTime(),
            title: e.target.title.value,
            description: e.target.description.value
        };
        const action = {
            type: "create",
            payload: juego
        };


        dispatch(action);

        console.log(juegos);
    }
    return (
        <div>
            <h1> Estos son mis Videojuegos</h1>
            <p>Numero de Videojuegos: {juegos.length}</p>
            <ul>
                {
                    juegos.map(juego => (
                        <li key={juego.id}>
                            {juego.title}
                            &nbsp; <button onClick={e => deleteMe(juego.id)}>X</button>
                            <input type='text'  onBlur={e => {edith(e, task.id)}}
                                                        onKeyPress={ e=> {
                                                            if(e.key == "Enter"){
                                                                edith(e,juego.id);
                                                                console.log("Has presionado enter")
                                                            }
                                                        }}
                             />
                        </li>
                    ))
                }
            </ul>
            <h3>Agregar juego</h3>
            <form onSubmit={getFormGames}>
                <input type="text" name="title" placeholder="Title" />
                <textarea name="description" placeholder='description' />
                <input type="submit" value="Guardar" />
            </form>
        </div>
    )
}
