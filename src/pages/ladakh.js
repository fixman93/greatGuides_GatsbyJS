import React from "react"
import Hero from "../components/ladakh/hero/hero"
import SEO from "../components/seo"
import Adventures from "../components/ladakh/adventures/adventures"
import Questions from "../components/ladakh/questions/questions"
import "../style/ladakh.css"
const SecondPage = () => (
  <div>
    <SEO title="Ladakh" />
    <Hero
      special="SUMMER SPECIAL:"
      title="Visit our Ladakh guides in July"
      description="Ladakh is a mountainous region in the northwest area of India known as Trans Himalaya. Ladakh was an independent kingdom for nine centuries. It was very strongly influenced by Tibet and buddhist, muslim and hindu cultures."
    />
    <Adventures />
    <Questions />
  </div>
)

export default SecondPage
