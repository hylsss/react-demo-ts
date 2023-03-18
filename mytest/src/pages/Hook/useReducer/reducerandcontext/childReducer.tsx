import { useReducerContext } from "./demo"

const CHildReducer = () => {
  const { state, dispatch } = useReducerContext()

  return (
    <div>
      child组件{state.count}
      child组件{state.name}
      <hr />
      <button
        onClick={() => {
          dispatch({ type: "add" })
        }}
      >
        child组件+1111
      </button>
    </div>
  )
}

export default CHildReducer
