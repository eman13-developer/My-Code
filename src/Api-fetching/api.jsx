import React, { useEffect, useState } from 'react'

function Apifetching() {
    const API="https://www.course-api.com/react-tours-project";
    const [tours,settours]=useState([]);
    async function fetchtours(){
        const fetching= await fetch(API);
        const data=await fetching.json();
        settours(data);
        
    }
    useEffect(()=>{
        fetchtours();

    },[]);
  return (
    <div className='flex flex-wrap justify-between justify-center gap-5'>
        {
            tours.map((meretours)=>{
                return(
                    <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={meretours.image}
      alt="Shoes"
      className="rounded-xl h-95 w-95" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{meretours.name}</h2>
    <p>{meretours.info.substring(0,100)}</p>
    <div className="card-actions">
      <button className="btn btn-primary">{meretours.price}</button>
    </div>
  </div>
</div>
                );
            })
        }
    </div>
  );
}

export default Apifetching;