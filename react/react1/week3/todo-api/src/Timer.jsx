import React, {useState, useEffect} from "react";

export default function Timer () {
    const [second, setSecond]= useState(0);
    useEffect(()=>{
        const interval = setInterval (()=>{setSecond(second=>second+1)},1000)
        return ()=> clearInterval(interval)
    })
    
    return ( 
        <> 
            <h1>
              Todolist
            </h1>
            <h2>
                You have used {second} seconds.
            </h2>
        </>
    )
}