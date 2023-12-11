import { ThemeContext } from "../Contexts/ThemeContext";
import React, { useContext } from "react";


// class TodoList extends Component{
//     static contextType = ThemeContext;
//     render(){
//         const { isDarkTheme, darkTheme, lightTheme, onChangeTheme} = this.context;
//         const theme = isDarkTheme ? darkTheme : lightTheme;
//         return(
//             <nav style={{background:theme.background, color:theme.color, textAlign:"center"}}>
//                 <p className="item">We go big or go home</p>
//                 <p className="item">The enemy is poverty</p>
//                 <p className="item">Either way we get out of the block</p>
//                 <button className="ui inverted primary button" onClick={onChangeTheme}>Change Theme</button>
//             </nav>
//         )
//     }
// }

const TodoList = () =>{
    const { themeState, onChangeTheme } = useContext(ThemeContext);
    const { isDarkTheme, darkTheme, lightTheme} = themeState;
    const theme = isDarkTheme ? darkTheme : lightTheme;
    return (
        <nav style={{background:theme.background, color:theme.color, textAlign:"center"}}>
            <p className="item">We go big or go home</p>
            <p className="item">The enemy is poverty</p>
            <p className="item">Either way we get out of the block</p>
            <button className="ui inverted primary button" onClick={onChangeTheme}>Change Theme</button>
        </nav>
    )
}

export default TodoList;