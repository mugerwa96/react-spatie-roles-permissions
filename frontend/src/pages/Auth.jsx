import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthenticationContxt } from "../context/AuthenticationContxt"

const Auth = () => {
     const { token } = useContext(AuthenticationContxt)
     if (!token) {
          return <Navigate to="/login" />
     }
     return (
          <div className="min-h-screen bg-slate-200">
               <Outlet />
          </div>
     )
}

export default Auth