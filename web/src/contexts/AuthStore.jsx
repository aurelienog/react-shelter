import React, { createContext, useState } from 'react'

const AuthContext = createContext();

function AuthStore({ children }) {
  const [user, setUser] = useState();
  console.log(user, 'context')

  const handleUserChange = (user) => {
    setUser(user);
  }

  const logout = () => {
    handleUserChange();
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{user, onUserChange: handleUserChange, logout }}>
      { children }
    </AuthContext.Provider>
  )
}

export { AuthStore as default, AuthContext }