import { useContext } from "react"
import { Contextdata } from "./contextchild"

const Getcontext = () => {
  const childpage = useContext(Contextdata)
  return (
    <div>
      在组件包裹中获取的值name:{childpage.name}sex:{childpage.sex}age:
      {childpage.age}
    </div>
  )
}

export default Getcontext
