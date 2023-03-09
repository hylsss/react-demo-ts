import React, { useReducer } from "react"

interface Actionstype {
  type: string
  payload: number
}

const initialState = { count: 87 }
const countReducer = (state: { count: number }, action: Actionstype) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + action.payload,
      }
    case "decremenet":
      return {
        ...state,
        count: state.count - action.payload,
      }
    default:
      throw new Error("noooooo")
  }
}

const UseReducerTest = () => {
  const [state, dispatch] = useReducer(countReducer, initialState)
  return (
    <>
      <span>Current count is {state.count}</span>
      <button
        onClick={() => {
          dispatch({ type: "increment", payload: 200 })
        }}
      >
        Increment 200
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decremenet", payload: 50 })
        }}
      >
        Decrement 50
      </button>
    </>
  )
}

export default UseReducerTest
