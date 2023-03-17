import React,{useState} from 'react'
import './App.css';

function App() {
  const[count,setCount]=useState(0)
  function Incremebnt(){
    setCount(count+1)
  }
  function Decrement(){
    setCount(count-1)
  }

  return (
    <div className="App">
      <p>{count}</p>
     <button onClick={Incremebnt}>Increase</button>
     <button onClick={Decrement}>Decrease</button>
    </div>
  );
}

export default App;
