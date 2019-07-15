import React from "react"
import Hero from "../components/ladakh/hero/hero"
import SEO from "../components/seo"
import Adventures from "../components/ladakh/adventures/adventures"
import Footer from "../components/ladakh/footer/footer"
import "../style/ladakh.css"
const SecondPage = () => (
  <div>
    <SEO title="Ladakh" />
    <Hero
      special="SUMMER SPECIAL:"
      title="Visit Ladakh, India with Great Guides"
      bgImage="https://i.ibb.co/X5HhFDM/image.png"
      description="Ladakh is a mountainous in the northwest area of India known as Trans Himalaya. Ladakh was an independent kingdom for nine centuries. It was very strongly influenced by Tibet and buddhist, muslim and hindu cultures. Our Great Guide Stanzin Tundup lives and treks all year in Ladakh."
    />
    <Adventures />

    <Footer />
  </div>
)

export default SecondPage
