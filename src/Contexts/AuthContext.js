import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({children}) =>{
    const [ isLoggedIn, setIsLoggedIn] = useState(false)

    const onChangeAuth = () =>{
        setIsLoggedIn(!isLoggedIn);
    }
        return(
            <AuthContext.Provider value={{isLoggedIn,onChangeAuth}}>
                {children}
            </AuthContext.Provider>
        )
}

export default AuthContextProvider;