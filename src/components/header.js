import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../components/header.css"
import logo from "../images/logo.png"
import menu_logo from "../images/menu_logo.png"
import trainer_zero from "../images/trainer_zero.png"


const Header = ({ siteTitle }) => (
  <header>
    
    <div className="big-header">
      <a><img className='trainer-photo' src={trainer_zero}/></a>
      <a><img className="logo-photo" src={logo}/></a>
      <a ><img className="menu" src={menu_logo}/></a>
    </div>

    <div class="header">
        <Link to="/mypokemons" className="header-button">Meus Pokémons</Link>
        <Link to="/pokedex" className="header-button">Pokedex</Link>
        <a class="header-button">Amigos</a>
        <Link to="/store" className="header-button">Capturar</Link>
        <Link to="/battle" className="header-button">Batalha</Link>
        <Link to="/dungeon" className="evento">Evento</Link>
    </div>
 
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
