import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import {increament,decreament,reset} from "../../Redux/Actions/CounterActions"
import Button from "./Button"


const Counter=()=>{

  const counterValue=useSelector((state)=>state.count.counter)
  console.log(counterValue)
  const dispatch=useDispatch();

    return(
    <div  style={{marginTop:"4rem",textAlign:"center"}}>
      <h1>Counter</h1>
      <h1>{counterValue}</h1>

      <Button
        name="Increament"
        onClick={()=>dispatch(increament())}
      />
      <Button
        name="Reset"
        onClick={()=>dispatch(reset())}
      />
      <Button
        name="Decreament"
        onClick={()=>dispatch(decreament())}
      />
    </div>
    )
}

export default Counter;