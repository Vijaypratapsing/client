import "./layout.scss"
import Navbar from './component/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { AuthContext } from "./context/AuthContext"
import { useContext } from "react";

function App() {
  
  return (
    <>
      <div className='layout'>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>

    </>
  )
}
function RequireAuth() {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) return <Navigate to="/login" />;
  else {
    return (
      <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    );
  }
}
export{App, RequireAuth} 
