import "./style.css"
import React from "react";

// export function CardPerfil(props) {
//     return (
//         <div className="containerCard">
//             <img src={`https://github.com/${props.login}.png`} alt="image-user" />
//             <p>Nome: {props.name}</p>
//             <p>Idade: {props.age}</p>
//         </div>
//     )
// }

export class CardPerfil extends React.Component{
    render() {
        return (
        <div className="containerCard">
        <img src= {`https://github.com/${this.props.login}.png`} alt="image-user" />
        <p>Nome:  {this.props.name}</p>
        <p>Idade: {this.props.age}</p>
    </div>)
        
    }
}