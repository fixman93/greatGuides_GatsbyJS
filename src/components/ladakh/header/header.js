import React from "react"

import LogoBlack from "../../../images/logoblack.png"
const Header = () => (
  <div className='header flex justify-content'>
    <a href="/" target="_blank"><img
      src={LogoBlack}
      alt='Logo'
    /></a>
    <ul>
      <li>
        <a href="/team/" target="_blank" rel="noopener">Team</a>
      </li>
      <li className='phone-number'>Tel: 206 899 5460</li>
    </ul>
  </div>
)

Header.propTypes = {
}

Header.defaultProps = {
}

export default Header
