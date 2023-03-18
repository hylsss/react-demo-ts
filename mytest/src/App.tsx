import React from "react"
import "./App.css"
import CallBackTest from "./pages/Hook/useCallback"
// import Test from "./components/test/index"
// import Classcomponent from "./components/classcomponent/index"
// import Home from "./pages/home/index"
// import TestUseContext from "./pages/Hook/useContext"
import UseMemoTest from "./pages/Hook/useMemo"
import Demo from "./pages/Hook/useReducer/reducerandcontext/demo"

// import MemoTest from "./pages/Hook/useMemo/MemoTest"
// import UseRefTest from "./pages/Hook/useRef/index"
// import TestUseRef from "./pages/Hook/useRef/useRefDemo"
import Game from "./pages/Hook/useState"
// import UseReducerTest from "./pages/Hook/useReducer/index"
// import Reducerdemo from "./pages/Hook/useReducer/reducerdemo"
// import UsestateTest from "./pages/Hook/useState/demo1"
// import DemoState from "./pages/Hook/useState/demo2"

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
      <Demo />
      {/* <UseReducerDemo /> */}
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
      {/* <TestUseContext />
      <UseReducerTest />
      <UsestateTest />
      <DemoState />
      <Reducerdemo /> */}
      {/* <Game />
      <UseMemoTest /> */}
    </div>
  )
}

export default App
