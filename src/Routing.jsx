import { Routes,Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}></Route>

            <Route path="home" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="*" element={<h1>404 Not Found</h1>}/>
            </Route>




        </Routes>
      
    </div>
  )
}

export default Routing