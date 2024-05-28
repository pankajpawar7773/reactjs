import React,{useState} from 'react'

function CounterComponent() {
    const [count, setCount] = useState(0)
    const handleIncrement = ()=>{
      setCount((count)=>count + 1)
      setCount((count)=>count + 1)
    }
    return (
      <>
      <p>Count is {count}</p>
      <button onClick={handleIncrement}>Increment by 2</button><br/><br/>
      <button onClick={()=>setCount(count - 1)}>Decrement -</button><br/><br/>
      <button onClick={()=>setCount(0)}>Reset</button><br/><br/>
      </>
    )
}

export default CounterComponent