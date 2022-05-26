import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todoSlice'


export default function TodoInput() {
  const dispatch = useDispatch();
  let nameRef = useRef()
  let timeRef = useRef()
  return (
    <div>
      <div className="col-md-6 mx-auto">
        <label>Todo name:</label>
        <input ref={nameRef} type="text" className='form-control' />
        <label>Todo time:</label>
        <input ref={timeRef} type="time" defaultValue="08:00" className='form-control' />
        <button onClick={() => {
          dispatch(addTodo({item:{
            name:nameRef.current.value,
            time:timeRef.current.value,
            id:Date.now(),
          }}))
        }} className='btn btn-info'>Add</button>
      </div>
    </div>
  )
}
