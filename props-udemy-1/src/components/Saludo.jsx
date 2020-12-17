import React from 'react';

const Saludo =(props) => {
    console.log(props)
    return(
        <div>
            <h2>Saludando a {props.persona} y tiene {props.edad} años</h2>
    <p>Edad: {props.edad}</p>
        </div>
    )
}
export default Saludo