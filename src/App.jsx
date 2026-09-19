import React, { useState } from 'react'
import { Trash2 } from 'lucide-react'
import TodoBgImg from "./assets/TodoBgImg.jpg"

function App() {

  // Input ke andar jo Todo likha ja raha hai
  const [todo, setTodo] = useState("")

  // Saare Todos
  const [todos, setTodos] = useState([])


  // Add Todo function
  const onAdd = () => {

    // Empty Todo ko add nahi karna
    if (todo.trim() === "") {
      return
    }

    // New Todo object
    const newTodo = {
      id: Date.now(),
      text: todo,
      completed: false
    }

    // Purane Todos + new Todo
    setTodos([...todos, newTodo])

    // Input ko empty karna
    setTodo("")
  }


  // Checkbox se Todo complete/uncomplete
  const toggleTodo = (id) => {

    setTodos(
      todos.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    )
  }


  // Delete Todo function
  const deleteTodo = (id) => {

    setTodos(
      todos.filter((item) => item.id !== id)
    )
  }


  return (
    <div className="flex justify-center items-center bg-slate-800 h-screen w-screen">

      {/* Main container */}
      <div
        className="h-150 w-155 flex flex-col justify-start items-center bg-slate-200 bg-cover bg-center bg-no-repeat rounded-xl shadow-2xl overflow-hidden"
        style={{ backgroundImage: `url(${TodoBgImg})` }}
      >

        <h1 className="text-center text-3xl font-extrabold tracking-tight text-white pb-6 mt-2">
          Manage Your Todos
        </h1>


        {/* Add Todos Field */}
        <div className="relative flex w-150 h-10 justify-between rounded-md shadow-xl bg-slate-400">

          <input
            className="m-2 border-none outline-none bg-transparent w-full"
            type="text"
            placeholder="Write Todos..."

            value={todo}

            onChange={(e) => {
              setTodo(e.target.value)
            }}
          />


          <div className="text-white bg-green-400 h-10 w-15 absolute top-0 right-0 overflow-hidden text-center pt-2 rounded-md">

            <button onClick={onAdd}>
              Add
            </button>

          </div>

        </div>


        {/* Todo List */}
        <div className="w-150 mt-5">

          {todos.map((item) => (

            <div
              key={item.id}
              className="flex items-center gap-3 bg-white/90 p-3 mb-2 rounded-md shadow"
            >

              {/* Checkbox */}
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleTodo(item.id)}
                className="h-5 w-5"
              />


              {/* Todo Text */}
              <span
                className={
                  item.completed
                    ? "line-through text-gray-400"
                    : "text-slate-800"
                }
              >
                {item.text}
              </span>


              {/* Delete Button */}
              <button
                onClick={() => deleteTodo(item.id)}
                className="ml-auto p-2 text-red-500 hover:bg-red-100 hover:text-red-600 rounded-full transition duration-200"
                title="Delete Todo"
              >
                <Trash2 size={20} />
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default App