import React from "react"
import FavoritarBotao from "../shared/favoritarBotao"

export class CursoCard extends React.Component{
  render(){
    return <div className="curso-card">
        <p>Meu nome é: {this.props.nome}</p>
        <p>Minha data de nascimento é: {this.props.nascimento}</p>
        <FavoritarBotao label='botao teste' />

    </div>
  }
}