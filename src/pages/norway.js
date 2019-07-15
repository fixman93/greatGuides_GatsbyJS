import React, { Component } from "react"

import Hero from "../components/ladakh/hero/hero"
import SEO from "../components/seo"
import Adventures from "../components/ladakh/norway/norway"
import Footer from "../components/ladakh/footer/footer"
import "../style/ladakh.css"
class SecondPage extends Component {


  render() {
    return (
      <div>
        <SEO title="Norway" />
        <Hero
          special="THIS SUMMER"
          title="Visit Norway with Great Guides"
          bgImage="https://greatguides-prod-media.s3.amazonaws.com/Trips/Norway/Arctic+Islands+adventures+in+Norway/007333-orsoyla-haarberg-www.visithelgeland.com-traena.23cbb002eca25b5e574a88b14e9030c6.jpg"
          description="Our great guides Eirik Iversen, Hanne Hollas amd Elise Koren are true norwegian explorers. They wanted to continue their passion and love for the outdoors. They lead our unique trips in the Fjords and Arctic region of Norway."
        />
        <Adventures />
        <Footer />
      </div>
    )
  }
}

export default SecondPage
