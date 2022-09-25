import  {React , useState} from 'react'

export const FormularioComponent = () => {

const [user, setUser] = useState({});

  const getFormularieData = e => {

    e.preventDefault();
    let datos = e.target;
    let user = {
      nombre: datos.nombre.value ,
      apellidos: datos.apellidos.value,
      genero: datos.genero.value,
      bio:datos.bio.value,
      enviar:datos.enviar.value
    };
    console.log(user);

    setUser(user);
  }


  const cambiarDatos = e => {
    let name_del_input = e.target.name;
    let usuario_para_modificar = user;

    //usuario_para_modificar[name_del_input] = e.target.value;

    setUser(estado_previo => ({
       
        ...estado_previo,
        [name_del_input]: e.target.value
      
    })
    );
    console.log(user);
    //console.log(usuario_para_modificar);
  }

  return (
    <div>
        <h1>Formularios con React...</h1>
        {
          user.bio && /*user.bio.length >= 1 &&*/(
        <div className='info_usuario label label-blue'>
          {user.nombre} {user.apellidos} es un {user.genero} y su biografia es esta: <p>{user.bio}</p>
          
        </div>)
        }


        <form onSubmit={getFormularieData}>
          <input type="text" placeholder= 'Nombre' name='nombre' onChange={cambiarDatos} />
          <input type="text" placeholder= 'Apellidos' name='apellidos' onChange={cambiarDatos}/> 
          <select name='genero' onChange={cambiarDatos}>
            <option value="Hombre">Hombre</option>
            <option value="Mujer">Mujer</option>
            <option value="Otro">Otro</option>
          </select>
          <textarea placeholder='Biografia' name='bio' onChange={cambiarDatos}></textarea>
          <input type="submit" value="Enviar" name='enviar'/>

        </form>
    </div>
  )
}
