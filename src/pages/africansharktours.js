import React from "react"
import Hero from "../components/ladakh/hero/hero"
import SEO from "../components/seo"
import Adventures from "../components/ladakh/adventures/adventures"
import Questions from "../components/ladakh/questions/questions"
import Footer from "../components/ladakh/footer/footer"
import "../style/ladakh.css"
const SecondPage = () => (
  <div>
    <SEO title="African Shark tours" />
    <Hero
      special="SUMMER SPECIAL:"
      title="Visit sharks in South Africa this summer"
      bgImage="https://s3.amazonaws.com/greatguides-prod-media/Trips/Africa+Shark+tours/shutterstock_1017273385+med.jpeg"
      description="Chris and Monique Fallows are passionate about sharks and marine wildlife. Having worked at, or visited, all of the world's Great White hotspots, they are confident that False Bay near Cape Town is completely unique in what is has to offer in viewing shark predatory behaviour. Spending over 200 days at sea each year means they're able to give our guests the most natural encounter with sharks possible."
    />
    <Adventures />
    <Questions />
    <Footer />
  </div>
)

export default SecondPage
