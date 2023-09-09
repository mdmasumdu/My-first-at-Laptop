import { useEffect, useState } from "react"

export default function Users(){

   const[user,setuser] =useState([]);

   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then(res=>res.json())
    .then(data=>setuser(data))
   },[])

    return(
        <div>
            <h3>User:{user.length}</h3>


        </div>
    )
}