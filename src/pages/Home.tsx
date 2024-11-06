import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Attorneys from '../components/Attorneys'
import SuccessStories from '../components/SuccessStories'
import BlogInsights from '../components/BlogInsights'
import CallToAction from '../components/CallToAction'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Attorneys />
      <SuccessStories />
      <BlogInsights />
      <CallToAction />
      <Contact />
    </>
  )
}

export default Home