import React from 'react';
import Imagen from './Imagen';
//como no usar los props
const Comentario = ({urlImagen, persona, texto}) => {
    return (
        <div className="media">
            < Imagen urlImagen ={urlImagen} />
            <div className="media-body">
                <h5 className= "mt-0">Nombre sujeto: {persona}</h5>
                {texto}
            </div>
        </div>
    )
}
export default Comentario