import React from 'react'

const Variables = () => {
    const saludo = 'Hola desde variable'
    const imagen = 'https://i.imgur.com/ZWfwU0q.jpg'
    return (
        <div>
            <h2>Nuevo Componente {saludo}</h2>
            <img src={imagen} alt=""/>
        </div>
    );
}

export default Variables;
