import { Button } from "antd"
import { memo } from "react"

interface ChildType {
  childVal?: number | string
  handlerFun?: any
}

const BackChild = memo((props: ChildType) => {
  console.log("渲染子组件！！！！")
  const deps = {
    数据部: [1, 2, 3],
    DT部: [5, 8, 12],
    行政部: [5, 14, 79],
    人事部: [3, 64, 105],
  }
  let member = Object.values(deps).flat(Infinity)

  ;(() => {
    const arr2 = [0, 1, 2, [[[3, 4]]]]
    console.log(Object.values(arr2).flat(3))
  })()
  return (
    <div>
      <h1>child的值{props.childVal}</h1>
      <input type="text" onChange={props.handlerFun} />
      <Button type="primary">primary</Button>
    </div>
  )
})

export default BackChild
