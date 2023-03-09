import { useState } from "react"
import InputTest from "./input"

const UsestateTest = () => {
  const [text, setText] = useState<string>("")
  const handleInput = (e: any) => {
    console.log(e, "oooooo")

    setText(e.target.value)
  }
  return (
    <div>
      <InputTest label="jjjj" text={text} onChange={handleInput} />
      <InputTest label="NANKKS" text={text} onChange={handleInput} />
    </div>
  )
}
export default UsestateTest
