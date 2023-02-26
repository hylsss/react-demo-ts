import { useState } from "react";

const Test = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <button onClick={()=>setCount(count + 1)}>+1</button>
      <button onClick={()=>setCount(count + 10)}>+10</button>
      <h1>{count}</h1>
    </div>
  );
};

export default Test
