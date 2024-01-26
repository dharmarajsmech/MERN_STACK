import React from 'react'
import {useState,useEffect} from "react"

export default function Effect() {
    const[data,setData] = useState(null);
    useEffect(() => {
        fethch("https://jsomplaceholder.typicode.com/todo/1")
        .them(Response=>Response.json())
        .then(result => setData(result))
  return () => {

  };
},[]);
    return (
    <div>
        {
            data?{
                <p>Data:</P>
            } : (
                <p>Loading....</p>
            )
        )}
    </div>  
  )
}
