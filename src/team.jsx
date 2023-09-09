import { useState } from "react"

export default function Team (){

    const [count,setcount]=useState(11)
    const AdHandler = ()=>{
      const newCount = count+1
      setcount(newCount)
    }

    const RemoveHandler =()=>{
        setcount(count - 1)
    }
    return (
        <div style={{color:"blue",
        border:"1px solid green"}}>

            <h3>Count:{count}</h3>
            <button onClick={AdHandler}>ADD</button>
            <button onClick={RemoveHandler}>Remove </button>
        </div>
    )
}