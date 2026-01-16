// import { useState } from "react"

// const Hook = () => {
//     let [count, setCount] = useState(0)


//     let increment = () => {
//         setCount(count + 1)
//     }   
//     console.log(count)


//     let decrement = ()=>{

//         setCount(count-1)
//         if (count <= 0){
//             setCount(0)
     
//         }
//     }
//     console.log(count);


//     let reset=()=>{
//         setCount(0)
//     }
    
//   return (
//     <div>

//         <h1>{count}</h1>
//       <button onClick={increment}>increment</button><br />
//       <button onClick={decrement}>decrement</button><br />
//       <button onClick={reset} disabled={count==0}>reset</button>
//     </div>
//   )
// }

// export default Hook


import { useState } from 'react'





const Hook = () => {

  let [dark,setdark]=useState(false)
  let [show,setshow]=useState(false)
  return (
    <div>
      <h1 style={{color:dark?"black":"white", backgroundColor:dark?"white":"black"}}> {dark?"light mode":"dark mode"} </h1>
      

      <button onClick={()=>{setdark(!dark)}}>toggle</button> <br /><br />
      
      
      
      {show && (<h1>hello</h1>)}

      <button onClick={()=>{setshow(!show)}}>{show?"hide":"show"}</button>


    </div>
  )
}

export default Hook
