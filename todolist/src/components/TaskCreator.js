import { useState } from 'react'

export const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState('')

  const handleSumbit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName)
    setNewTaskName('')
  }

  return (
    <form onSubmit={handleSumbit} className='my-2 row'>
      <div className='col-9'>
        <input
          type="text"
          placeholder="Ingrese una tarea"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          className='form-control'
        />
      </div>
      <div className="col-3">
        <button className="btn btn-primary btn-sm">Guardar Tarea</button>
      </div>
    </form>
  )
}