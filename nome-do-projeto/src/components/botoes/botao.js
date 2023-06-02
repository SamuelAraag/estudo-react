import React from "react";

export default class Botao {
    render(){
        return <button className="btn btn-primary botao-curtir">{this.props.nome}</button>
    }
}