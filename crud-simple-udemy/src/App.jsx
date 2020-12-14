import React from 'react'
import shortid from 'shortid'

function App() {
  const [tarea, setTarea] = React.useState('')
  const [tareas, setTareas] = React.useState([])
  const [edicion, setEdicion] = React.useState(false)
  const [id, setId] = React.useState('')
  const [error, setError] = React.useState (null)

  const agregarTarea = e => {
    e.preventDefault()
    if (!tarea.trim()) {
      console.log('Elemento Vacio')
      setError('Escriba algo por favor...')
      return
    }
    console.log(tarea)
    setTareas([
      ...tareas,
      { id: shortid.generate(), nombreTarea: tarea }
    ])
    setTarea('')
    setError(null)
  }
  const eliminarTarea = id => {
    const arrayFiltrado = tareas.filter(item => item.id !== id)
    setTareas(arrayFiltrado)
  }
  const editar = item => {
    console.log(item)
    setEdicion(true)
    setTarea(item.nombreTarea)
    setId(item.id)
  }
  const editarTarea = e => {
    e.preventDefault()
    if (!tarea.trim()) {
      console.log('Elemento Vacio')
      setError('Escriba algo por favor...')
      return
    } 
    const arrayEditado = tareas.map(
      item => item.id === id ?{id, nombreTarea:tarea} : item
    )
    setTareas(arrayEditado)
    setEdicion(false)
    setTarea('')
    setId('')
    setError(null)
  }
  return (
    <div className="container">
      <h2 className="text-center">Crud simple</h2>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Listar tarea</h4>
          <ul className="list-group">
            {
              tareas.length === 0 ? (
                <li className="list-group-item">No hay tareas</li>

              ) : (
              tareas.map(item => (
                <li className="list-group-item" key={item.id}>
                  <span className="lead">{item.nombreTarea}</span>
                  <button
                    className="btn btn-danger btn-sm float-right mx-2"
                    onClick={() => eliminarTarea(item.id)}>
                    Eliminar
                  </button>
                  <button
                    className="btn btn-warning btn-sm float-right"
                    onClick={() => editar(item)}>
                    Editar
                  </button>
                </li>
              )))
            }
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">
            {
              edicion ? 'Edita tarea': 'Agregar tarea'
            }
          </h4>
          <form onSubmit={edicion ? editarTarea : agregarTarea}>
            {
              error ?  <span className="text-danger">{error}</span> :null
            }
            <input 
              type="text"
              className="form-control mb-2"
              placeholder="Ingresar tarea"
              onChange={e => setTarea(e.target.value)}
              value={tarea}
            />
            {
              edicion ? (
                <button className="btn btn-warning btn-block" type="submit">Editar</button>
              ) :
              (
                <button className="btn btn-dark btn-block" type="submit"> Agregar</button>
              )
            }
          </form>
        </div>
      </div>

    </div>
  );
}
export default App;
