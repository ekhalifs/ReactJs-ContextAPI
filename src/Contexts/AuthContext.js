import React, { Component, createContext } from "react";

export const AuthContext = createContext();

class AuthContextProvider extends Component{
    state = {
        isLoggedIn: true,
    }
    onChangeAuth = () =>{
        this.setState({isLoggedIn: !this.state.isLoggedIn})
    }
    render(){
        return(
            <AuthContext.Provider value={{...this.state,onChangeAuth:this.onChangeAuth}}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthContextProvider;