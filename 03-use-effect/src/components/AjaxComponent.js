import React, { useEffect, useState } from 'react'



//generico / basico

export const AjaxComponent = () => {


    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [errores, setErrores] = useState("");

    const getUsuariosEstaticos = () => {
        setUsuarios([

            {
                "id": 1,
                "email": "Diego.romero.s@reqres.in",
                "first_name": "Diego",
                "last_name": "Romero",

            },
            {
                "id": 2,
                "email": "darkcloud10031@reqres.in",
                "first_name": "Dark",
                "last_name": "Cain",

            },
            {
                "id": 3,
                "email": "DarkCain@reqres.in",
                "first_name": "DarkCain",
                "last_name": "leno",

            },
        ]);
    }

    const getUsuariosAjaxPms = () => {
        fetch("https://reqres.in/api/users?page=1")
            .then(respuesta => respuesta.json())
            .then(

                resultado_final => {
                    setUsuarios(resultado_final.data);
                    console.log(usuarios);
                },
                error => {
                    console.log(error);
                }

            );
    }

    const getUsuariosAjaxAW = /*async*/ () => {
        setTimeout(async () => {
            try {
                const peticion = await fetch("https://reqres.in/api/users?page=1");
                const { data } = await peticion.json();

                setUsuarios(data);
                setCargando(false);
            } catch (error) {
                console.log(error);
                setErrores(error.message);
            }

        }, 2000);

    }



    useEffect(() => {
        //getUsuariosEstaticos();
        //getUsuariosAjaxPms();
        getUsuariosAjaxAW();
    }, []);

    if (errores !== "") {
        return (
            <div className='errores'>
                {errores}
            </div>
        );

    }
    //cuanto esta todo cargando
    else if (cargando === true) {
        return (<div className='cargando'>
            Cargando estado...
        </div>);
    } 
    else if (cargando === false && errores === "") {
        //cuando todo ha ido bien
        return (
            <div>
                <h2>Listado de usuarios via Ajax</h2>
                <ol className='usuarios'>
                    {
                        usuarios.map(usuario => {
                            return (<li key={usuario.id}>
                                <img src={usuario.avatar} width="80" />
                                &nbsp;
                                {usuario.first_name} {usuario.last_name}
                            </li>);
                        })

                    }




                </ol>
            </div>
        )
    }




}
