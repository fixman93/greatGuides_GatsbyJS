import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Container from "../common/container/container"
import LogoBlack from "../images/logoblack.png"

import './header.css'

const Header = () => (
  <header>
    <Container>
      <div className='header flex justify-content'>
        <a href="/" target="_blank"><img
          src={LogoBlack}
          alt='Logo'
        /></a>
        <ul>
          <li>
            <Link to="/team/">Team</Link>
          </li>
        </ul>
      </div>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
