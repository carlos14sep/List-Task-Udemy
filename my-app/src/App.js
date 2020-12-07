import React from 'react'
import Contador from './components/Contador'
import Eventos from './components/Eventos'
import Formulario from './components/Formulario'
import Listas from './components/Listas'
import Parrafo from './components/Parrafo'
import Varibales from './components/Variables'
function App() {
  return (
    <div className="container mt-5">
      <h1>Hola mundo React</h1>
      {/* <Parrafo />
      <Varibales />
      <Eventos />
      <Contador /> 
      <Listas /> */}
      <Formulario />
    </div>
  );
}

export default App;
