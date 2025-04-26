import React, { useState } from 'react'


const App = () => {
  const [task, setTask] = useState("")

  const [todos, setTodos] = useState([])

  const addItemHander = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task])
      setTask("")
    }
    console.log(todos);
  }

  const deleteHandler =(idx)=>{
    const newTodos = [...todos]
    newTodos.splice(idx,1)
    setTodos(newTodos)
  }


  return (
    <div className='h-screen w-full bg-zinc-900  text-blue-100 px-10 '>
      <h1 className='text-3xl text-center  font-medium py-10 '>Todo App  </h1>

      <div className=' w-full flex  items-center justify-center  gap-6 mb-10  '>
        <input className='px-3 py-2 border border-blue-200 text-center outline-none rounded-xl' type="text" placeholder='Add new Task  ' value={task} onChange={(e) => setTask(e.target.value)} />
        <button className='bg-green-600 p-2 rounded-xl   ' onClick={addItemHander}>Add Task </button>
      </div>

      <div className='mytask flex  border-[1px] border-b-blue-200 rounded-xl  '>
        <ul className="list-none px-10   " >
          {todos.map((e, idx) => {
            return <li key={idx} className='mt-2 text-blue-200 flex justify-between items-center'>
              {e}
              <button onClick={()=> deleteHandler(idx)}>X</button>
            </li>

          })}
        </ul>
      </div>


    </div>
  )
}

export default App