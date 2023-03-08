import React, { useReducer } from "react"

interface PropsType {
  age: number
}
const reducer = (state: string, action: PropsType) => {
  switch (action.age) {
    case 2:
      return state + 1
  }
}

const UseReducerTest = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <div></div>
}

export default UseReducerTest
