
import { Outlet } from 'react-router-dom';
import Navbar from ".../assets/logo.png";

const RootLayout = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <Outlet/>
        </div>
    </div>
  )
}

export default RootLayout
