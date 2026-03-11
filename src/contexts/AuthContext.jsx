import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({children}) {
    // kalau access_token gk ada nilai isLogin bakal null 
  const [isLogin, setIsLogin] = useState(localStorage.getItem("access_token"));

  function checkLogin(){
      if (localStorage.getItem("access_token")) {
        setIsLogin(localStorage.getItem("access_token"));
      }
  }

  function logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setIsLogin(null);
  }

  return (
    // value : export state dan func yang akan digunakan di file lain 
    <AuthContext.Provider value={{isLogin, checkLogin, logout}}>
        {children}
    </AuthContext.Provider>
  )
}