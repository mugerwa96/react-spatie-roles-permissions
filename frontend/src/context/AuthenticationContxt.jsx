import React, { createContext, useState } from 'react'

export const AuthenticationContxt = createContext()
export const AuthenticationProvider = ({ children }) => {
     const [user, setUser] = useState({
     })
     const [token, _setToken] = useState(localStorage.getItem('ACCESS'))
     const [role, _setRole] = useState({})
     const [permissions, _setPermissions] = useState([])


     const setToken = (token) => {
          _setToken(token)
          if (token) {
               localStorage.setItem('ACCESS', token)
          } else {
               localStorage.removeItem('ACCESS')
          }
     }

     const setPermissions = (permissions) => {
          _setPermissions(permissions)
     }
     const setRole = (role) => {
          _setRole(role)
     }
     return <AuthenticationContxt.Provider value={{
          user,
          setUser,
          token,
          role,
          setToken,
          permissions,
          setPermissions,
          setRole
     }}
     >{children}
     </AuthenticationContxt.Provider>
}