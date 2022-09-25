//Importar modulos de react/dependencias
import React, {Fragment} from "react";

//Funcion del componente
const FirstComponente = () => {

    /*let nombre = "Diego";*/
    /*let apellidos = "Romero Sanchez";*/

    let user = {
        nombre:"Diego",
        apellidos: "Romero Sanchez",
        profesion: "Gamer"
    }
    console.log(user);
    return (
        <>
        <div className="First-Componente">
            <hr/>
    <h2>Componente creado</h2>
    <h3>By <strong>{user.nombre} {user.apellidos}</strong> </h3>
    <p>Este es mi primer componente</p>
    <h3>{JSON.stringify(user)}</h3>
    <ul>
        <li>
            React
        </li>
        <li>
            Angular
        </li>
        <li>
            Vue
        </li>
        <li>
            Bootstrap
        </li>
    </ul>
    
    </div>
    
        </>

    
    
    
    );
}

//Exports

export default FirstComponente;