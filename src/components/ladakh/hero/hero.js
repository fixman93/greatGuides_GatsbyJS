import PropTypes from "prop-types"
import React from "react"
import Header from "../header/header"
import { useStaticQuery, graphql } from "gatsby"

import Container from "../../../common/container/container"

import heroImage from "../../../images/hero.png"
let bgImage = {
  backgroundImage: 'url(' + heroImage + ')',
};
function Hero() {
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
  return (
    <div className='hero ladakh' style={bgImage}>
      <Container>
        <Header />
        <div className='content'>
          <h3>SUMMER SPECIAL:</h3>
          <h1>{site.siteMetadata.title}</h1>
          <p>{site.siteMetadata.description}</p>
        </div>
      </Container>
    </div>
  )
}

Hero.propTypes = {
  description: PropTypes.string
}


export default Hero
