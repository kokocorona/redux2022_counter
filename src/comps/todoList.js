import React from 'react'
import { useSelector } from 'react-redux'

export default function TodoList() {
  const todos_ar = useSelector(state => state.todos.todos_ar);

  return (
    <div>
      <h1 className='display-5 text-center mt-4'>List of todos</h1>
      <div className="col-md-6 row mx-auto">
        {todos_ar.map(item => {
          return (
            <div key={item.id} className='border p-2 d-flex align-items-center'>
              <h4>{item.name} - {item.time}</h4>
              <button className='btn btn-danger ms-auto'>X</button>
            </div>
          )
        })}

      </div>
    </div>
  )
}
