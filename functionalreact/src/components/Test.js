import React,{useState} from 'react'               // type rfce press enter

function Test() {
    const [count,setCount] = useState(0)
  return (
    <div>
    <h1>This is Counter {count}</h1>
    <button onClick={()=>setCount(count+1)}>+1</button>
    <button onClick={()=>setCount(count-1)}>-1</button>
    </div>
  )
}

export default Test