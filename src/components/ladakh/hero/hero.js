import PropTypes from "prop-types"
import React from "react"
import Header from "../header/header"
import { useStaticQuery, graphql } from "gatsby"

import Container from "../../../common/container/container"

import heroImage from "../../../images/hero.png"

import "./hero.css"


function Hero({ bgImage, title, description, special }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  let bgImages = {
    backgroundImage: 'url(' + bgImage + ')',
  };
  return (
    <div className='hero ladakh' style={bgImages}>
      <Container>
        <Header />
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
