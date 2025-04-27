import React, { useEffect, useState } from 'react'

const App = () => {
  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([])
  const [editIdx, setEditIdx] = useState(null)
  const [editText, setEditText] = useState('')

  const addItemHandler = () => {
    if (task.trim() !== "") {
      setTodos([...todos, { text: task, complete: false }])
      setTask("")
    }
  }

  const deleteHandler = (idx) => {
    const newTodos = [...todos]
    newTodos.splice(idx, 1)
    setTodos(newTodos)
    if (editIdx === idx) {
      setEditIdx(null)
      setEditText("")
    }
  }

  const doneHandler = (idx) => {
    const newTodos = [...todos]
    newTodos[idx].complete = !newTodos[idx].complete
    setTodos(newTodos)
  }

  const editHandler = (idx) => {
    setEditIdx(idx)
    setEditText(todos[idx].text)
  }

  const saveEditHandler = (idx) => {
    if (editText.trim() !== '') {
      const newTodos = [...todos]
      newTodos[idx] = { ...newTodos[idx], text: editText }
      setTodos(newTodos)
      setEditIdx(null)
      setEditText("")
    }
  }

  return (
    <div className='h-screen w-full bg-zinc-900 text-blue-100 px-10'>
      <h1 className='text-3xl text-center font-medium py-10'>Todo App</h1>

      <div className='w-full flex items-center justify-center gap-6 mb-10'>
        <input
          className='px-3 py-2 border border-blue-200 text-center outline-none rounded-xl'
          type="text"
          placeholder='Add new Task'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className='bg-green-600 p-2 rounded-xl'
          onClick={addItemHandler}
        >
          Add Task
        </button>
      </div>

      <div className='mytask flex flex-col gap-3'>
        <ul className="list-none px-4 w-full border-[1px]  rounded-xl border-blue-200 " >
          {todos.map((todo, idx) => (
            <li key={idx} className="flex justify-between items-center text-xl  py-2 border-blue-300">
              {editIdx === idx ? (
                <input
                  type="text"
                  className="px-2 py-1 rounded bg-gray-700 t text-white"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              ) : (
                <span
                  className={`${todo.complete ? "line-through text-green-500" : ""} cursor-pointer`}
                >
                  {todo.text}
                </span>
              )}

              <div className="flex gap-2">
                {editIdx === idx ? (
                  <button
                    className="bg-blue-500 px-2 py-1 rounded-xl text-md text-white"
                    onClick={() => saveEditHandler(idx)}
                  >
                    Save
                  </button>
                ) : (
                  <>
                    <button
                      className="text-blue-400 px-3 py-1 text-xl rounded-xl"
                      onClick={() => editHandler(idx)}
                    >
                      <i className="ri-edit-line "></i>
                    </button>

                    <button
                      className="text-green-400 px-3 py-1 text-xl rounded-xl"
                      onClick={() => doneHandler(idx)}
                    >
                      <i className="ri-check-line"></i>
                    </button>

                    <button
                      className="text-red-400 px-3 py-1 text-xl rounded-xl"
                      onClick={() => deleteHandler(idx)}
                    >
                      X
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
