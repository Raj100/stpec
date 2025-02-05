// import { useDispatch } from "react-redux";
// import {info} from "../features/Login/LoginSlice.jsx";
// import { useState } from "react";

// export default function Login() {
//   const dispatch = useDispatch();
//   const [username,setUsername]=useState();
//   const [password,setPassword]=useState();
//   const handleLogin =(e)=>{
//     e.preventDefault();
//     console.log("k");
//     dispatch(info({username, password}));        
//     // dispatch(defaultSearch(search));        

//   }
//   return (
//     <>
//       <div className="h-screen w-full flex">

//         <div className="m-auto">
//             <form className="min-w-[300px] lg:w-[350px] flex flex-col bg-gray-200 px-4 py-8 shadow">
//               <h1 className="text-center font-dosis font-semibold text-xl mb-4 ">Login</h1>
//             <input type="text" placeholder="Username/Email" value={username} onChange={(e)=>{setUsername(e.target.value)}} className="my-1 p-2 shadow rounded"></input>
//             <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="my-1 p-2 shadow rounded"></input>
//             <button type="submit" className="text-white mt-8 p-2 bg-blue-500 hover:bg-blue-600 rounded" onClick={handleLogin}>Login</button>
//             </form>
//         </div>

//       </div>
//     </>
//   )
// }
