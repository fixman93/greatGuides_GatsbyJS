import React from "react"
import Hero from "../components/ladakh/hero/hero"
import SEO from "../components/seo"
import Adventures from "../components/ladakh/peru/peru"
import Questions from "../components/ladakh/questions/questions"
import Footer from "../components/ladakh/footer/footer"
import "../style/ladakh.css"
const SecondPage = () => (
  <div>
    <SEO title="Peru" />
    <Hero
      special="SUMMER SPECIAL:"
      title="Visit Peru with Juan CCaihuari"
      bgImage="https://s3.amazonaws.com/greatguides-prod-media/Trips/Lares+Trek+Peru/20181005_145258+Med.jpeg"
      description="Juan is a Peruvian Quechua whose great, great grandfather settled on, and was granted ownership of, the land around and including Choquequirao. Juan has started his own guide company which is the only tour company run by, and employing, the locals around Choquequirao. The guides, cooks, and muleteers are all local residents. He rents mules and horses from the locals, camps on their land to give them rental income, buys food grown in the villages along the trail, and is working on other ways to ensure the tourist dollars are widely distributed."
    />
    <Adventures />
    <Questions />
    <Footer />
  </div>
)

export default SecondPage
