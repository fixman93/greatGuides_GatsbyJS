import PropTypes from "prop-types"
import React from "react"

import LogoBlack from "../../../images/logoblack.png"
const Header = ({ }) => (
  <div className='header flex justify-content'>
    <img
      src={LogoBlack}
      alt='Logo'
    />
  </div>
)

Header.propTypes = {
}

Header.defaultProps = {
}

export default Header
