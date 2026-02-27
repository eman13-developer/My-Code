import "./App.css";


// tareeka no1
// export default function App(){
//   let username="admin";
// return(
//   <div className="maincard">
// <h3>hello users</h3>        
// {/* <Userinfo username="fatima" age={19}/> */}
// <Userinfo username={username}/>
//   </div>
// );
// }
// function Userinfo(props){

// return(
//   <div className="info">
//   <h4>eman</h4>
//   <h4>19</h4>
//   <img src="pic.webp" alt="" />
//   <h5>{props.username}</h5>
//   </div>
// );
// }
// professional way
// import {Users}from"./data.jsx"
// export default function App(){
// return(
//   <div className="maincard">     
// {
//   Users.map((mereUsers)=>{
//     return  <Userinfo name={mereUsers.name} age={mereUsers.age} img={mereUsers.img}/>
//   })
// }
//   </div>
// );
// }
// function Userinfo(props){

// return(
//   <div className="main">

//   <div className="info">
//     <h2>{props.name}</h2>
//   <h4>{props.age}</h4>
//   <img src={props.img} alt="" />
//   </div>
//   </div>
// );
// }

import {Users}from"./data.jsx"
export default function App(){
return(
  <div className="maincard">     
{
  Users.map((mereUsers)=>{
    return  <Userinfo {...mereUsers}/>
  })
}
  </div>
);
}
function Userinfo({name,age,img}){

return(
  <div className="main">
  <div className="info">
<h4>{name}</h4>
<h6>{age}</h6>
<img src={img} alt="" />
    
  </div>
  </div>
);
}