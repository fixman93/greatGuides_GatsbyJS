import React from "react"
import Hero from "../components/ladakh/hero/hero"
import SEO from "../components/seo"
import Adventures from "../components/ladakh/adventures/adventures"
import Questions from "../components/ladakh/questions/questions"
import Footer from "../components/ladakh/footer/footer"
import "../style/ladakh.css"
const SecondPage = () => (
  <div>
    <SEO title="Rwanda" />
    <Hero
      special="SUMMER SPECIAL:"
      title="Visit Rwanda this summer"
      bgImage="https://s3.amazonaws.com/greatguides-prod-media/Trips/Lares+Trek+Peru/20181005_145258+Med.jpeg"
      description="Rwanda known as the land of a thousand hills is the newest African destination. From Mountain gorillas at the Volcanoes national park to rwandese cultural activities, Rwanda has a lot to offer. Greg Bakunzi, your guide in Rwanda has focussed on the endangered mountain gorillas that reside in the Virunga Massif, a chain of eight volcanic mountains that straddle Rwanda, Uganda and the Democratic Republic of Congo."
    />
    <Adventures />
    <Questions />
    <Footer />
  </div>
)

export default SecondPage
