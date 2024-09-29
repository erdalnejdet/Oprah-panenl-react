// src/context/AuthContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('auth', 'true'); // Kullanıcıyı localStorage'a kaydedebilirsiniz
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('auth'); // Kullanıcı çıkış yaptığında silinecek
  };

  const value = {
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
