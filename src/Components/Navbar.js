import { AuthContext } from "../Contexts/AuthContext";
import { ThemeContext } from "../Contexts/ThemeContext";
import React, { Component } from "react";

class Navbar extends Component{
    //static contextType = ThemeContext;
    render(){ 
        return(
            <AuthContext.Consumer>{(authContext) =>{
                return(
                    <ThemeContext.Consumer>{(themeContext) =>{
                        const { isLoggedIn, onChangeAuth } = authContext;
                        const loggedIn = isLoggedIn ? 'Log Out': 'Log In';
                        const { isDarkTheme, darkTheme, lightTheme} = themeContext;
                        const theme = isDarkTheme ? darkTheme : lightTheme;
                        return(
                            <div style={{background:theme.background, color:theme.color, textAlign:"center"}}>
                                <p style={{textAlign:"center",height:'20px'}} onClick={onChangeAuth}>{loggedIn}</p>
                                <h5 style={{textAlign:'center'}}>Context API</h5>
                                <div className="ui three buttons">
                                    <button className="ui button">Home</button>
                                    <button className="ui button">Products</button>
                                    <button className="ui button">About us</button>
                                </div>
        
                            </div>
        
                        )
                    }}
            
                    </ThemeContext.Consumer>
                )
            }}

            </AuthContext.Consumer>
            
           
        )
    }
}

export default Navbar;