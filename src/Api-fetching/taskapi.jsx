import React, { useEffect, useState } from 'react'

// function Taskapi() {
//     let myapi="https://dummyjson.com/users";
//     const [data ,meradata]=useState([]);
//     async function apidata(){
//         let fetching=await fetch(myapi);
//         let mydata=await fetching.json();
//         meradata(mydata.users);
//     }
//     useEffect(()=>{
//         apidata();
//     },[]);
//         return (
//     <div className='flex flex-wrap justify-center gap-4'>
// {
//     data.map((meradata)=>{
// return(
//     <div className="card bg-base-100 w-96 shadow-sm bg-amber-500! flex flex-col justify-center items-center">
//   <figure>
//     <img
//       src={meradata.image}
//       alt="Shoes" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">
//       {meradata.firstname}
//       <div className="badge badge-secondary">{meradata.bloodGroup}</div>
//     </h2>
//     <p>{meradata.gender}</p>
//     <div className="card-actions justify-end">
//       <div className="badge badge-outline">{meradata.age}</div>
//       <div className="badge badge-outline">{meradata.email}</div>
//     </div>
//   </div>
// </div>
// );
//     })
// }
//     </div>
//   );
// }

// export default Taskapi;




function Taskapi() {
    let myapi="https://dummyjson.com/products/category/vehicle";
    const [data ,meradata]=useState([]);
    async function apidata(){
        let fetching=await fetch(myapi);
        let mydata=await fetching.json();
        meradata(mydata.products);
    }
    useEffect(()=>{
        apidata();
    },[]);
        return (
    <div className='flex flex-wrap justify-center gap-4'>
{
    data.map((meradata)=>{
return(
    <div className="card w-96 h-96 bg-[#000000d4]! shadow-lg overflow-hidden flex flex-col">

  {/* Image Section */}
  <figure className="w-full h-56">
    <img
      src={meradata.images[0]}
      alt={meradata.title}
      className="w-full h-full object-cover"
    />
  </figure>

  {/* Details Section */}
  <div className="card-body text-white flex flex-col justify-between flex-1">

    <div>
      <h2 className="card-title">
        {meradata.brand}
      </h2>
      <p className="text-sm text-gray-300 mt-2">
        {meradata.description.slice(0, 80)}...
      </p>
    </div>

    <div className="card-actions justify-between mt-4">
      <div className="badge badge-outline">
        {meradata.category}
      </div>
      <div className="badge badge-secondary">
        ${meradata.price}
      </div>
    </div>

  </div>

</div>

);
    })
}
    </div>
  );
}

export default Taskapi;


//  <div className="card bg-base-100 w-96 shadow-sm bg-[#000000d4]! flex flex-col justify-center items-center h-96! relative">
//   <figure className='w-full!'>
//     <img
//       src={meradata.images[0]}
//       alt="Shoes"  className='h-100 object-cover'/>
//   </figure>
//   <div className="card-body absolute inset-0 text-[#ffffff]! flex flex-col justify-end">
//     <h2 className="card-title">
//       {meradata.brand}
//       <div className="badge badge-secondary">{meradata.title}</div>
//     </h2>
//     <p>{meradata.description}</p>
//     <div className="card-actions justify-end">
//       <div className="badge badge-outline">{meradata.category}</div>
//       <div className="badge badge-outline">{meradata.price}</div>
//     </div>
//   </div>
// </div>