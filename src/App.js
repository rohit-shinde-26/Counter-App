import React,{useState} from 'react'

const App = () => {
  
  const [count ,setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (

    <center>
    <div>
      <h1>Counter App</h1>
      <h2>Count:{count}</h2>
      <button onClick={increase}>Increament</button>
      <button onClick={decrease}>Decreament</button>
  </div>
  </center>
  
  )
}

export default App