import React from 'react'
import styles from './home.module.css'
import Hero from './container/hero/Hero'
import HomeSwiper from './container/swiper/HomeSwiper'

const Home = () => {
  return (
    <>
      <Hero />
      <HomeSwiper />
    </>
  )
}

export default Home