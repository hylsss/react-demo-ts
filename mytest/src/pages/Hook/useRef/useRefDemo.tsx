import React from "react"
import RefChild from "./refChild"

export default function TestUseRef() {
  const divRef = React.createRef<any>()
  const getInputFocus = () => {
    divRef.current.placeholder = "输入中"
    divRef.current.focus()
  }
  return (
    <div>
      {/* divRef挂载到inpput上 */}
      <input ref={divRef} type="text" />
      <button onClick={() => getInputFocus()}>测试useRef</button>
      <hr />
      <RefChild ref={divRef} />
    </div>
  )
}
