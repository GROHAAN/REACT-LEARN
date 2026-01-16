import { Link,Outlet } from "react-router-dom"


const Layout = () => {

 
  return (
    <div>

        <header>
            <h1>LOGO</h1>
            <ul>
                <li><Link to="/home"> HOME</Link></li>
                <li><Link to="/about"> ABOUT</Link></li>
                <li><Link to="/contact"> CONTACT</Link></li>
            </ul>

        </header>

          
        <Outlet/>

        <footer>

            <h1>This is FOOTER</h1>
        </footer>
      
    </div>
  )
}

export default Layout
