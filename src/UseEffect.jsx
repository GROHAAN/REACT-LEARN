import { use, useEffect, useState } from "react";


const UseEffect = () => {
    let [count,setCount]=useState(0);

    const inc = () => {
        setCount(count+1);
    }

    useEffect(() => {
        console.log("use effect called runnning...");
    },[])

  return (
    <>
      <button onClick={inc}> increment</button>
    </>
  )
}

export default UseEffect


// json-server --watch db.json