import React, {useState} from "react";
import './index.css';
import headind from './I am heading one ... from first component

export default function App() {
  const [show,setshow] = useState(false)
  function handleclick(){
    setshow(show ? false : true)

  }
  return (
    <div>
      <h1> I am heading one ... from first component</h1>
      <h4> I am heading two ... from second component</h4>
      <p> I am heading three ... from third component</p>
      <button> onclick={handleclick} > onclickme</button>
    </div>
  )

}
