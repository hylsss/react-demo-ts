import React from "react"

const RefChild = React.forwardRef<any, any>((props, myref) => {
  const handleClick = () => {}

  return (
    <div>
      <div>
        <button onClick={handleClick}>click to get value</button>
        <input ref={myref} type="text" />
      </div>
    </div>
  )
})

export default RefChild
