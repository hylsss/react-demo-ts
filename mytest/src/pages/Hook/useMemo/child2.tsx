import React from "react"

const Child2 = React.memo((props: { value: number }) => {
  console.log("执行子组件2了", props.value)
  return <div>子组件2上的m：{props.value}</div>
})

export default Child2
