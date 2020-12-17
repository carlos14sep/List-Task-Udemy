import React from 'react';
//uso de props
const Imagen =(props) => {
    return(
        <img src={props.urlImagen} className="mr-3" alt=""/>
    )
}
export default Imagen