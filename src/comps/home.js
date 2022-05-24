import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add } from '../features/counter' 

export default function Home() {
  const counter = useSelector((state) => state.counter.value.counter)

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Home : {counter}</h2>
      <button onClick={() => {
        dispatch(add())
      }}>Add 1</button>
    </div>
  )
}
