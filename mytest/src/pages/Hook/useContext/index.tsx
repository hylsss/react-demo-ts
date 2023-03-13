// import { useContext } from "react"
import { useState } from "react"
import { Contextdata } from "./child/contextchild"
import Getcontext from "./child/getContext"
import { ContextType } from "./../props"

const TestUseContext = () => {
  // const getVal = useContext(Contextdata)
  const [context, setContext] = useState<ContextType | null>({
    name: "hoho",
    age: 10,
    sex: "huhu",
  })
  return (
    <div>
      <div>
        {/* useContext获取到的值 name:{getVal.name}age:{getVal.age} sex:{getVal.sex} */}
      </div>
      <Contextdata.Provider value={context}>
        <Getcontext />
      </Contextdata.Provider>
    </div>
  )
}
export default TestUseContext
