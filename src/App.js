import React,{useState} from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import Children from './components/Children';
import ColorBox from './components/ColorBox' 

function App() {

  let count = useSelector(state => state.count)
  let dispatch = useDispatch()
  let boxes = useSelector(state => state.boxes)
  let [number,setNumber]=useState(1)

  let [bgColor,setBgColor]=useState("red")

  const increaseNum = () => {
    console.log("hey")
    dispatch({ type: "Increment", payload:number }) //dispatch send action, and action is object

  }
  const renderBox = ()=>{
    boxes.map(item => {return <ColorBox/>})
  }

const handleTextChange = (e) => {
  if (isNaN(e.target.value)){
    setBgColor(e.target.value)
  } else {
    setNumber(parseInt(e.target.value))
   
    
  }
}


  return (
    <div>
      <h1>Counter App</h1>
      <h2>{count}</h2>
    
      <button onClick={() => increaseNum()}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrement", payload: 12 })}>Decrement</button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>

      <input type="text" onChange={handleTextChange} ></input>
     
      {
        Array(count).fill("box").map(box => {
          return(
           <ColorBox bgColor={bgColor}/>
          )
        })
      }
      
    </div>
  );
}

export default App;
