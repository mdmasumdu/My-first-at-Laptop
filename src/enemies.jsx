import './enemies.css'

import { useEffect, useState } from "react"
import Enemy from './enemy';

export default function Enemies (){

   const [user,setuser] = useState([]);
   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data =>setuser(data))
   },[])
    return (
        <div className="box">
            <h3>Enemies:{user.length}</h3>
            {
                user.map(ene=><Enemy enemy={ene}> </Enemy>)
            }

        </div>
    )
}