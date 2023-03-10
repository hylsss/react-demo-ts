import React from "react"

const Child = React.memo((props: { value: number }) => {
  console.log("执行子组件1了")
  return <div>子组件1上的n：{props.value}</div>
})
export default Child
