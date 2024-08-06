import React from 'react'
import styles from './home.module.css'
import Hero from './container/hero/Hero'
import HomeSwiper from './container/swiper/HomeSwiper'
import AboutSection from './container/about/AboutSection'

const Home = () => {
  return (
    <>
      <Hero />
      <HomeSwiper />
      <AboutSection />
    </>
  )
}

export default Home