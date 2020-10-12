import React from "react"
import "./bulma.module.scss"
import navbarStyles from './navbar.module.scss'
import {Link} from 'gatsby'

export function NavBar() {
  return (
    <div className="navbar is-dark" >
      <div className="navbar-brand">
        <p className="navbar-item">{"<D2C/>"}</p>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-start container">
        <Link className="navbar-item" to = "/">Inicio</Link>
        <div className="navbar-item has-dropdown is-hoverable">
          <div className="navbar-link">Linguagens de Programacao</div>
          <div className="navbar-dropdown has-background-black-bis">
            <div className="navbar-item">
              <div className="columns">
                <div className="column">
                  <img className="image" alt="imagem"/>
                </div>
                <div className="column">
                  <a href="#">Python</a>
                </div>
              </div>
            </div>
            <div className="navbar-item">
              <div className="columns">
                <div className="column">
                  <img className="image" alt="imagem"/>
                </div>
                <div className="column">
                  <a href="#">Python</a>
                </div>
              </div>
            </div>
            <div className="navbar-item">
              <div className="columns">
                <div className="column">
                  <img className="image" alt="imagem"/>
                </div>
                <div className="column">
                  <a href="#">Python</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link className="navbar-item" to="/documentos">Documentos</Link>
        <Link className="navbar-item" to="/links">Links</Link>
      </div>
    </div>
  )
}
