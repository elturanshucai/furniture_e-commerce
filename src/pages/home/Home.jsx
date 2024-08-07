import React from 'react'
import styles from './home.module.css'
import Hero from './container/hero/Hero'
import HomeSwiper from './container/swiper/HomeSwiper'
import AboutSection from './container/about/AboutSection'
import DiscountSection from './container/discount/DiscountSection'

const Home = () => {
  return (
    <>
      <Hero />
      <HomeSwiper />
      <AboutSection />
      <DiscountSection />
    </>
  )
}

export default Home