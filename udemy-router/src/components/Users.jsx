import React from 'react'
import { useParams } from 'react-router-dom'


const Users = () => {

    const { id } = useParams()
    console.log(id)
    const [usuario, setUsuario] = React.useState([])

    React.useEffect(() => {
        const obtenerDatos = async () => {
            const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
            const users = await data.json()
            setUsuario(users)
        }
        obtenerDatos()
    }, {id})
    return (
        <div>
            <h1>{usuario.name}</h1>
            <p>{usuario.expansion}</p>
            <p>{usuario.unique_unit}</p>
        </div>
    )
}
export default Users




