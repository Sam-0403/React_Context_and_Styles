import React, {createContext} from "react";
import useToggleState from "../hooks/useToggleState";

const ThemeContext = createContext();

function ThemeProvider(props){
    const [isDarkMode, toggleTheme] = useToggleState(false);
    return(
        <ThemeContext.Provider value={{isDarkMode: isDarkMode, toggleTheme: toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export {ThemeContext, ThemeProvider}; 

// class ThemeProvider extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             isDarkMode: true
//         };
//         this.toggleTheme = this.toggleTheme.bind(this);
//     }
//     toggleTheme(){
//         this.setState({
//             isDarkMode: !this.state.isDarkMode
//         });
//     }
//     render(){
//         return(
//             <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
//                 {this.props.children}
//             </ThemeContext.Provider>
//         );
        
//     }
// }

// export {ThemeContext, ThemeProvider};