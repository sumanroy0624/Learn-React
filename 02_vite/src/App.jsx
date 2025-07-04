import { useState, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
   
  const clicked = () => {
   
    if(counter<20){
       counter = counter + 1;
       setCounter(counter);
    }
    
  };
  const remove=()=>{
    if(counter>0){
      counter--;
      setCounter(counter);
    }
    
  };
  return (
    <>
      <h1>Learn react | Suman Roy</h1>
      <br />
      <h1> this is counter game </h1>
      <h2>Counter Value : {counter}</h2>
      <h2>{counter}</h2>

      <button onClick={clicked}>Add Value</button>
      <br /><br />
      <button onClick={remove}>Remove Value</button>

    </>
  );
}

export default App;
