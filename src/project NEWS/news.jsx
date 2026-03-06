import React, { useEffect, useState } from 'react'
import { CiLink } from "react-icons/ci";
function News() {
    const url ="https://newsapi.org/v2/everything?q=bitcoin&apiKey=12f23898e5634872b383a20715c369e0";
    const [value,setvalue]=useState([]);
    const [readmore ,setreadmore]=useState(false);
    const [loading,setloading]=useState(false);
    const [search,setsearching]=useState("");
    async function myfecthing(){
      setloading(true);
        const fetching=await fetch(url);
        const res=await fetching.json();
        const data=res;
        setvalue(data.articles);
        setloading(false);
    }
    function deletetile(title){
let deletecard=value.filter((meradata)=>meradata.title!==title)
setvalue(deletecard)

    }
    function changemode(e){
    setsearching(e.target.value)
    }
    useEffect(()=>{

        myfecthing();
    },[])
    if(loading===true){
      return <div className='flex justify-center items-center!'>
      <img src="loader.gif" alt="" />
      </div>
    }
  return (
    <div>
        <div className='flex flex-col items-center! gap-3'>

<h1 className='text-center text-bold! text-8xl!'>News</h1>
<input 
        type="text" 
        name="search" 
        value={search} 
        onChange={changemode} className='w-30'
      />

<h1 className='text-center text-bold! text-8xl!'>{value.length}</h1>
        </div>
    <div className='flex flex-wrap justify-center gap-4'>
       
  {
   value.filter((meradata)=>{
   return meradata.title.includes(search.toLowerCase());
   })
    .map((meradata)=>{
        return<div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img 
      src={meradata.urlToImage}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{meradata.title}</h2>
    <p>{readmore ? meradata.content.substring(0,50) :meradata.content}</p>
    <button onClick={()=>setreadmore(!readmore)}>
    {readmore ? "readmore":"showless"}
    </button>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=>deletetile(meradata.title)}>Delete</button>
    </div>
    <a target='_blank' href={meradata.url}>
        <CiLink className='text-bold text-8xl'/>
    </a>
  </div>
</div>
    
})
  }
    </div>
</div>
  )
}

export default News