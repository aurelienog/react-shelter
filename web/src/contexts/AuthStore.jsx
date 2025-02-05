import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import usersService from '../services/users'

const AuthContext = createContext();

function AuthStore({ children }) {
  const [user, setUser] = useState();
  const navigate = useNavigate();

const getUserFromSession = async () => {
      try {
        const currentUser = await usersService.restore(user)
        setUser(currentUser);
        
      } catch (error) {
        console.error('Error fetching user from session:', error);
        setUser(null); 
      }
    }

  useEffect(() => {
    getUserFromSession();
  },[]);

  const handleUserChange = (user) => {
    ; setUser(user);
  };

  const logout = async () => {
    try {
      usersService.logout()
      handleUserChange(); 
      navigate("/login");
    } catch (error) {
      const errors = error.response?.data?.errors;
    }

  };




  return (
    <AuthContext.Provider value={{user, onUserChange: handleUserChange, logout }}>
      { children }
    </AuthContext.Provider>
  )
}

export { AuthStore as default, AuthContext }