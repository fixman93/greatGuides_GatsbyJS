import React from "react"
import Hero from "../components/ladakh/hero/hero"
import SEO from "../components/seo"
import Adventures from "../components/ladakh/rwanda/rwanda"
import Questions from "../components/ladakh/questions/questions"
import Footer from "../components/ladakh/footer/footer"
import "../style/ladakh.css"
const SecondPage = () => (
  <div>
    <SEO title="Rwanda" />
    <Hero
      special="SUMMER SPECIAL:"
      title="Visit Rwanda this summer"
      bgImage="https://s3.amazonaws.com/greatguides-prod-media/Trips/Rwanda/10+Days+Remarkable+Rwanda/10DayRwanda1_Medium.jpg"
      description="Rwanda known as the land of a thousand hills is the newest African destination. From Mountain gorillas at the Volcanoes national park to rwandese cultural activities, Rwanda has a lot to offer. Greg Bakunzi, your guide in Rwanda has focussed on the endangered mountain gorillas that reside in the Virunga Massif, a chain of eight volcanic mountains that straddle Rwanda, Uganda and the Democratic Republic of Congo."
    />
    <Adventures />
    <Questions />
    <Footer />
  </div>
)

export default SecondPage
