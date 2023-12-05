import React, { Component, createContext } from "react";

 export const ThemeContext = createContext();

class ThemeContextProvider extends Component{
    state = {
        isDarkTheme: true,
        darkTheme: {
            background: 'black',
            color: 'grey'
        },
        lightTheme:{
            background:'grey',
            text: 'black'
        }
    }
    onChangeTheme = () => {
        this.setState({isDarkTheme: !this.state.isDarkTheme});
    }
    render(){
        return(
            <ThemeContext.Provider value={{...this.state, onChangeTheme:this.onChangeTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}
export default ThemeContextProvider;