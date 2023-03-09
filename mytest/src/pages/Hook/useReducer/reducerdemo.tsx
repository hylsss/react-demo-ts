import { useReducer } from "react"

interface ParamsType {
  name?: string
  age?: string
  sex?: string
}

const dealAction = (
  state: any,
  action: { formData: ParamsType; type: string }
) => {
  switch (action.type) {
    case "change":
      console.log({ ...state, ...action.formData })
      return { ...state, ...action.formData }

    case "reset":
      return { name: "", age: "", sex: "" }
  }
}

const Reducerdemo = () => {
  const [state, dispatch] = useReducer(dealAction, {
    name: "",
    age: "",
    sex: "",
  })
  return (
    <div>
      <div>
        name:{" "}
        <input
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch({ type: "change", formData: { name: e.target.value } })
          }}
        />
      </div>
      <div>
        age:{" "}
        <input
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch({ type: "change", formData: { age: e.target.value } })
          }}
        />
      </div>
      <div>
        sex:{" "}
        <input
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch({ type: "change", formData: { sex: e.target.value } })
          }}
        />
      </div>

      <h1>
        name{state.name} ---- age{state.age} --- sex{state.sex}
      </h1>
      <button>重置</button>
      <button>确认</button>
    </div>
  )
}

export default Reducerdemo
