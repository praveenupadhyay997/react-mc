import React, { useReducer } from 'react'

function createReducer(state, action) {
    switch(action.type) {
        case 'INCREMENT' : 
          return state + action.value
        case 'DECREMENT' : 
          return state - action.value
        case 'RESET' : 
          return 0
        default : 
          return state
    }
}

const UseReducer = () => {
    const [count, dispatch] = useReducer(createReducer, 10)
  return (
    <div>
        <div>{count}</div>
        <button onClick={() => {
            dispatch({type: 'INCREMENT', value: 1})
        }}>INCREMENT by 1</button>
        <button onClick={() => {
            dispatch({type: 'DECREMENT', value: 1})
        }}>DECREMENT by 1</button>
        <button onClick={() => {
            dispatch({type: 'RESET'})
        }}>RESET</button>
    </div>
  )
}

export default UseReducer