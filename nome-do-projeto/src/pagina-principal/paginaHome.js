import React from "react"
import FavoritarBotao from "../shared/favoritarBotao"

export class PaginaHome extends React.Component{
  render(){
    return <div className="landing-page">
        <p>carrousel: {this.props.nome}</p>
        <p>Minha data de nascimento é: {this.props.nascimento}</p>
        <FavoritarBotao label='botao teste' />

    </div>
  }
}