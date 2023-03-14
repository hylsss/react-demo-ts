import { memo } from "react"

interface ChildType {
  childVal?: number | string
  handlerFun?: any
}

const BackChild = memo((props: ChildType) => {
  console.log("渲染子组件！！！！")
  return (
    <div>
      <h1>child的值{props.childVal}</h1>
      <input type="text" onChange={props.handlerFun} />
    </div>
  )
})

export default BackChild
