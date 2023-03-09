import { useState } from "react"
import FilterItems from "./filterItems"
import { foods } from "./hook"
import List from "./list"
import SearchBar from "./SearchBar"

const DemoState = () => {
  const [query, setQuery] = useState<string>("")
  const handleChange = (e: any) => {
    setQuery(e.target.value)
  }
  // 执行FilterItems组件的方法 过滤参数
  const result = FilterItems(query, foods)
  return (
    <div>
      <SearchBar query={query} handleChange={handleChange} />
      <hr />
      <List items={result} />
    </div>
  )
}

export default DemoState
