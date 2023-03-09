import React from "react"
import "./App.css"
// import Test from "./components/test/index"
// import Classcomponent from "./components/classcomponent/index"
// import Home from "./pages/home/index"
import TestUseContext from "./pages/Hook/useContext"
import UseReducerTest from "./pages/Hook/useReducer/index"
import UsestateTest from "./pages/Hook/useState/demo1"
import DemoState from "./pages/Hook/useState/demo2"

export interface itemState {
  name: string
  age: number
}

// export interface arrState {
//   list: itemState[]
// }

// const list: itemState[] = [
//   { name: "hedy", age: 18 },
//   { name: "Joe", age: 19 },
//   { name: "John", age: 20 },
// ]

function App() {
  return (
    <div className="App">
      {/* <div>
      <h1>函数组件点击更新</h1>
      <Test />
      </div>
    

     <div>
       <h1>类组件点击更新</h1>
       <Classcomponent />
     </div>
 

    <div>
      <h1>组件之间的props传值</h1>
      <Home list={list}/>
    </div> */}
      <TestUseContext />
      <UseReducerTest />
      <UsestateTest />
      <DemoState />
    </div>
  )
}

export default App
