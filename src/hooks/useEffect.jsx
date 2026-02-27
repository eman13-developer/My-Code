import React, { useEffect, useState } from 'react'

function Useeffect() {
const [value ,setvalue]=useState(0);
const[size ,setsize]=useState(window.innerWidth)
useEffect(()=>{
    document.title=`${value}`
    window.addEventListener("resize",()=>{
        setsize(window.innerWidth)
    })
},[])

  return (
    <div className='text-center'>
        <h3>{value}</h3>
        <h4>{size}</h4>
        <button onClick={()=>setvalue(value+1)}>click me</button>
    </div>
  )
}

export default Useeffect