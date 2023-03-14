import { useCallback, useState } from "react"
import BackChild from "./backchild"

const CallBackTest = () => {
  const [parentState, setParentState] = useState(0) //父组件的state
  const [count, setCount] = useState(100)
  //需要传入子组件的函数
  const toChildFun = useCallback(() => {
    console.log("需要传入子组件的函数")
    setCount((num) => {
      return num + 1
    })
  }, [count])

  return (
    <div>
      <h1>{parentState}</h1>
      <button onClick={() => setParentState((val) => val + 1)}>
        点击我改变父组件中与Child组件无关的state
      </button>
      <button onClick={toChildFun}>点击我修改useCallback关联的值</button>
      {/* 将父组件的函数传入子组件 */}
      <BackChild childVal={count} handlerFun={toChildFun}></BackChild>
    </div>
  )
}

export default CallBackTest
