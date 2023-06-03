import React, { useState } from "react";
import { LoginContext } from "./LoginContext";

export const LoginProvider = ({ children }) => {
    
    const [email,setEmail] = useState();
  
    return (
      <LoginContext.Provider value={{
        email,setEmail
      }}>
        {children}
      </LoginContext.Provider>
    );
  };