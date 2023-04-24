import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByValue } from './redux/counterSlice';

function Counter() {
    const dispatch = useDispatch();
    const {count} = useSelector(state => state.counter)
  return (
    <div>
        <h1>Redux Toolkit</h1>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(incrementByValue(10))}>IncreaseByValue</button>
    </div>
  )
}

export default Counter