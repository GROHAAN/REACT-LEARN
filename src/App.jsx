import "./App.css"

import {Footer,  Footer2 } from "./Footer"
import Navbar from "./Navbar"
import Logo from "./assets/react.svg"
import Datashow from "./pages/Datashow"



let App =()=>{

  return (

    <div>
      <Navbar/>
      <h1>Hello World</h1>
      
      <img src="/vite.svg" alt="" />
      <img src={Logo} alt="" />
      
      <Footer/>
      <Footer2/>

      <Datashow/>
    </div>
  )
}

export default App