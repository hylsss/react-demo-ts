import { useMemo, useState } from "react"

const MemoTest = () => {
  const [value, setValue] = useState(0)
  const [count, setCount] = useState(0)
  const handleFun = useMemo(() => {
    console.log("getTotal exec ...")
    setValue(count + 1)
    return count + 1
  }, [count])

  return (
    <div>
      <div>{value}</div>
      <div>{handleFun}</div>
      <button
        onClick={() => {
          setCount((num) => {
            return handleFun + num
          })
        }}
      >
        value值+1
      </button>
      <button
        onClick={() => {
          setValue((num) => {
            return num + 1
          })
        }}
      ></button>
      {/* <input
        value={count}
        onChange={(e) => (e.target as HTMLInputElement).value}
      /> */}
    </div>
  )
}

export default MemoTest
