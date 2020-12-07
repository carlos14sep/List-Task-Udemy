import React, {useState} from 'react'

const Listas = () => {
    // const estadoInicial = [1,2,3,4,5,6]
    //Array de objetos
    const estadoInicial = [
        {id:1, Texto: 'Tarea 01'},
        {id:2, Texto: 'Tarea 02'},
        {id:3, Texto: 'Tarea 03'},
        {id:4, Texto: 'Tarea 04'},
        
    ]
    const [lista, setLista] = useState(estadoInicial)

    // const arrayUno = ['Chile', 'Argentina']
    // const arrayDos = ['Perú', 'Mexico']

    // const Unidos = [...arrayUno, ...arrayDos]
    // console.log(Unidos)

    const agregarElemento = () => {
        console.log('Click')
        setLista([
            ...lista,
            {id:5, Texto: 'Tarea 05'}
        ])
    }
    
  return (
    <div>
      <h2>Listas</h2>
      {
          lista.map ((item, index) => (
              <h4 key={index}> {item.Texto}</h4>
          ))
      }
      <button onClick={() => agregarElemento ()}>Agregar </button>
    </div>
  );
}

export default Listas;
