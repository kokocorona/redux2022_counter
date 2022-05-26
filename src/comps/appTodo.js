import React from 'react'
import TodoInput from './todoInput'
import TodoList from './todoList'

export default function AppTodo() {
  return (
    <div className='container'>
      <TodoInput />
      <TodoList/>
    </div>
  )
}
