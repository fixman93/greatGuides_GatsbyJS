import PropTypes from "prop-types"
import React from "react"
import Header from "../header/header"

import Container from "../../../common/container/container"

import "./hero.css"


function Hero({ bgImage, title, description, special }) {

  let bgImages = {
    backgroundImage: 'url(' + bgImage + ')',
  };
  return (
    <div className='hero ladakh' style={bgImages}>
      <Header />
      <Container>
        <div className='content'>
          <h3>{special}</h3>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </Container>
    </div>
  )
}

Hero.propTypes = {
  description: PropTypes.string
}


export default Hero
