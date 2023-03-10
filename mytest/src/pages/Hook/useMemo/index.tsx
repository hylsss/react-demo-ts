import { useState } from "react"
import Child from "./child"
import Child2 from "./child2"

const UseMemoTest = () => {
  const [n, setN] = useState(0)
  const [m, setM] = useState(10)
  console.log("执行最外层盒子了")
  return (
    <>
      <div>
        最外层盒子
        <Child value={n} />
        <Child2 value={m} />
        <button
          onClick={() => {
            setN(n + 1)
          }}
        >
          n+1
        </button>
        <button
          onClick={() => {
            setM(m + 1)
          }}
        >
          m+1
        </button>
      </div>
    </>
  )
}

export default UseMemoTest
