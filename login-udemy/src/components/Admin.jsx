import React from 'react'
import { withRouter } from "react-router-dom"
import {auth} from "../firebase"
import Firestore from './Firestore'

const Admin = (props) => {

    const [user, setUser] =  React.useState(null)
 
    React.useEffect (() => {
        if(auth.currentUser){
            console.log ('Existe usuario')
            setUser(auth.currentUser)
        } else {
            console.log('Usuario no existe')
            props.history.push('/login') 
        // Para poder acceder a otra direccion o pagina
        }
    },[props.history])
    return (
        <div className="container">
            <h3>Ruta protegida</h3>
            {
                user && (
                    <Firestore user={user}  />
                )
            }
        </div>
    )
}

export default withRouter(Admin)
// se utiliza para acceder a otra pagina nabvar que esta en app