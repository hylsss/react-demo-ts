import {
  createContext,
  Dispatch,
  useCallback,
  useContext,
  useReducer,
} from "react"
import CHildReducer from "./childReducer"

interface InitDataType {
  count: number
  name: string
}
const initdata: InitDataType = {
  count: 0,
  name: "susu",
}

interface IContext {
  state: InitDataType
  dispatch: Dispatch<{
    type: string
  }>
}

const Context = createContext<IContext>({
  state: initdata,
  dispatch: () => {},
})
export const useReducerContext = () => {
  return useContext(Context)
}

const Demo = () => {
  const handlerFun = useCallback((state: any, action: { type: string }) => {
    const { type } = action
    const { count } = state
    switch (type) {
      case "add":
        return { ...state, count: count + 1, name: "Jojo" }
      case "dire":
        return { ...state, count: count - 1, name: "Miko" }
      default:
        return console.log("没有数据")
    }
  }, [])
  const [state, dispatch] = useReducer(handlerFun, initdata)

  return (
    <div>
      {state.count}
      <button
        onClick={() => {
          dispatch({ type: "add" })
        }}
      >
        +++1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "dire" })
        }}
      >
        ----1
      </button>
      <Context.Provider value={{ state, dispatch }}>
        <CHildReducer />
      </Context.Provider>
    </div>
  )
}

export default Demo
