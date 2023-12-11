import React, {createContext, useState } from "react";

 export const ThemeContext = createContext();

const  ThemeContextProvider = ({children})  =>{
    const [themeState, setTheme] = useState({
        isDarkTheme: true,
        darkTheme: {
            background: 'black',
            color: 'grey'
        },
        lightTheme:{
            background:'grey',
            text: 'black'
        }
    })
    const onChangeTheme = () => {
       setTheme({
        ...themeState,
        isDarkTheme: !themeState.isDarkTheme,
       })
    }
        return(
            <ThemeContext.Provider value={{themeState, onChangeTheme}}>
                {children}
            </ThemeContext.Provider>
        )
    }
export default ThemeContextProvider;