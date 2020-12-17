import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'

const Nosotros = () => {
    const [equipo, setEquipos] = React.useState([])
    useEffect(() => {
        // console.log(useEffect)
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        //     const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
        const users = await data.json()
        // console.log(users)
        // setEquipos(users)
        setEquipos(users.civilizations)
    }
    return (
        <div>
            <h1>Nosotros</h1>
            <ul>
                {
                    equipo.map(item => (
                        <li key={item.id}>
                            <Link to={`/Nosotros/${item.id}`}>
                                {item.name} - {item.expansion}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Nosotros