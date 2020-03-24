import React from "react"
import logo from "../../assets/logo_each.png"
import { Container } from "./styles"
import { Link } from "react-router-dom"
//import { FaGithub } from "react-icons/fa"
export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img alt="Logo" src={logo}></img>
      </Link>
      <div>
        <h2>eachshare</h2>
        <hr />
        <Link to="/">
          <h2>cursos</h2>
        </Link>
        {/*<a target="_blank" href="https://github.com/viniciusroland">
          <h2>criado por: vrc <FaGithub /></h2>
        </a>*/}
      </div>
    </Container>
  )
}
