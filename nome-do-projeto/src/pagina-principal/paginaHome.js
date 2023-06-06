import React from "react"
import { Hero } from "../hero/hero"
import { Cabecalho } from "./cabecalho"
import { Sobre } from "../sobre/sobre"

export class PaginaHome extends React.Component{
  render(){
    return <>
      <Cabecalho />
      <Hero />
    </>
  }
}