import { createContext } from "react"
import { ContextType } from "./../../props"

// 设置useContext的默认值
// const data: ContextType = { name: "test", age: 18, sex: "男" }
// const data: ContextType = {
//   name: "",
//   age: 0,
//   sex: "",
// }

export const Contextdata = createContext<ContextType | null>(null)
