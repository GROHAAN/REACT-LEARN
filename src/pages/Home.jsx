import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  let navigate = useNavigate()

    
    let okk = ()=>{
      navigate("/contact")
    }
  return (
    <div>


    
    

      <h1>THis is HOme page</h1>

      <button onClick={okk}>Go to Contact Page</button>
    </div>
  )
}

export default Home
