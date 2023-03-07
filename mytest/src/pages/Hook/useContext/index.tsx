// import { useContext } from "react"
import { Contextdata } from "./child/contextchild"
import Getcontext from "./child/getContext"

const TestUseContext = () => {
  // const getVal = useContext(Contextdata)
  return (
    <div>
      <div>
        {/* useContext获取到的值 name:{getVal.name}age:{getVal.age} sex:{getVal.sex} */}
      </div>
      <Contextdata.Provider value={{ name: "hoho", age: 10, sex: "huhu" }}>
        <Getcontext />
      </Contextdata.Provider>
    </div>
  )
}
export default TestUseContext
