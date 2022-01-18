import React, { useContext } from 'react'

import {ThemeContext} from "./contexts/ThemeContext";

// export default class PageContent extends Component {
//     static contextType = ThemeContext;
//     render() {
//         const {isDarkMode} = this.context;
//         const styles = {
//             backgroundColor: isDarkMode?"#404040":"#ffffff",
//             height: "100vh",
//             width: "100vw",
//         };
//         return (
//             <div style={styles}>
//                 {this.props.children}
//             </div>
//         )
//     }
// }

function PageContent(){
    const {isDarkMode} = useContext(ThemeContext);
    const styles = {
        backgroundColor: isDarkMode?"#404040":"#ffffff",
        height: "100vh",
        width: "100vw",
    };
    return (
        <div style={styles}>
            {this.props.children}
        </div>
    )
}

export default PageContent;
