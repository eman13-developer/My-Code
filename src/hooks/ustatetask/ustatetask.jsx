import { useState } from "react";
import "../../App.css";

// export default function Ustatetask(){
//     const [data,setdata]=useState([
// {
//     name:"eman",
//     age:19,
//     img:"pic.webp"
// },
// {
//     name:"eman",
//     age:19,
//     img:"pic.webp"
// },
// {
//     name:"eman",
//     age:19,
//     img:"pic.webp"
// },
// {
//     name:"eman",
//     age:19,
//     img:"pic.webp"
// }

// ]);
// return(
// <div className="task">
//     {
//         data.map((meradata)=>{
//             return (
// <div className="data">
//     <h2>{meradata.name}</h2>
//     <h3>{meradata.age}</h3>
//     <img src={meradata.img} alt="" />
// </div>
//             )
//         })
//     }
// </div>
// );
// }


export default function Ustatetask(){
    const [data,setdata]=useState([
{
    name:"eman",
    age:19,
    img:"pic.webp"
},
{
    name:"eman",
    age:19,
    img:"pic.webp"
},
{
    name:"eman",
    age:19,
    img:"pic.webp"
},
{
    name:"eman",
    age:19,
    img:"pic.webp"
}

]);
function datainfo(){
    setdata([
        {
    name:"eman",
    age:19,
    img:"vite.svg"
},
{
    name:"eman",
    age:19,
    img:"vite.svg"
},
{
    name:"eman",
    age:19,
    img:"vite.svg"
},
{
    name:"eman",
    age:19,
    img:"vite.svg"
}

    ])
}
return(
<div className="task">
    {
        data.map((meradata)=>{
            return (
<div className="data">
    <h2 className="">{meradata.name}</h2>
    <h3>{meradata.age}</h3>
    <img src={meradata.img} alt="" />
</div>
            )
        })
    }
    <button onClick={datainfo}>click</button>
</div>
);
}
