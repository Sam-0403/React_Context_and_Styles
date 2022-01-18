import React, {createContext, useState} from "react";

const LanguageContext = createContext();

function LanguageProvider(props){
    const [language, setLanguage] = useState("english");
    const changeLanguage = (event) => {
        setLanguage(event.target.value);
    }
    return(
        <LanguageContext.Provider value={{language: language, changeLanguage: changeLanguage}}>
            {props.children}
        </LanguageContext.Provider>
    );
}

export {LanguageContext, LanguageProvider};

// class LanguageProvider extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             language: "french"
//         };
//         this.changeLanguage = this.changeLanguage.bind(this);
//     }
//     changeLanguage(event){
//         this.setState({
//             language: event.target.value
//         });
//     }
//     render(){
//         return(
//             <LanguageContext.Provider value={{...this.state, changeLanguage: this.changeLanguage}}>
//                 {this.props.children}
//             </LanguageContext.Provider>
//         );
//     }
// }

// const withLanguageContext = Component => props => (
//     <LanguageContext.Consumer>
//         {value => <Component languageContext={value} {...props}/>}
//     </LanguageContext.Consumer>
// )

// export {LanguageContext, LanguageProvider, withLanguageContext};
