import React, {Fragment, useState} from 'react'

const Eventos = () => {
    const [texto, setTexto] = useState('Texto desde el estado')
    const eventoClick = () => {
        console.log('me diste un click ')
        setTexto('Cambiando el texto..')
    }
    return (
        <Fragment>
            <hr />
            <h2>{texto}</h2>
            <button onClick={() => eventoClick ()}>Click </button>
        </Fragment>
    );
}

export default Eventos;
