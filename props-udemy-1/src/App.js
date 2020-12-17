import React from 'react';
import Comentario from './components/Comentario.jsx';
import Imagen from './components/Imagen.jsx';
import Saludo from './components/Saludo.jsx'

function App() {
  return (
    <div className="container mt-5">
      <h1>Proyecto desde cero</h1>
      <Saludo persona='Ignacio' edad={30} />
      <Saludo persona='Carlos' edad={25} />
      <Saludo persona='Hugo' edad={40} />
      <hr />
      <Comentario
        urlImagen='https://picsum.photos/64.jpg'
        persona='Carlos'
        texto='eeeeeeeeeeeeeeeeee'
      />
      <Comentario
        urlImagen='https://picsum.photos/64'
        persona='Andres'
        texto='aaaaaaaaaaaaaaaaaa'
      />
      <Comentario
        urlImagen='https://picsum.photos/seed/picsum/64'
        persona='Felipe'
        texto='oooooooooooooooooo'
      />
    </div>
  );
}

export default App;
