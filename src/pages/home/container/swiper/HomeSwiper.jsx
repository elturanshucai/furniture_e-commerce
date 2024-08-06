import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar, Pagination } from 'swiper/modules'
import styles from './swiper.module.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { swiperImages } from '../../../../images'
import Slide from './container/Slide'
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

const swiperData = [
    {
        id: 1,
        img: swiperImages.slide1,
        title: 'Sofas'
    },
    {
        id: 2,
        img: swiperImages.slide2,
        title: 'BEDS AND HEADBOARDS'
    },
    {
        id: 3,
        img: swiperImages.slide2,
        title: 'Rugs'
    },
    {
        id: 4,
        img: swiperImages.slide1,
        title: 'CUSHIONS'
    },
    {
        id: 5,
        img: swiperImages.slide2,
        title: 'Rugs'
    },
    {
        id: 6,
        img: swiperImages.slide1,
        title: 'Furniture'
    }
]

const HomeSwiper = () => {
    return (
        <section className={`${styles.swiper__container} hero__swiper`}>
            <Swiper
                modules={[Navigation, Scrollbar, Pagination]}
                navigation={{
                    prevEl: '#prev',
                    nextEl: '#next'
                }}
                spaceBetween={20}
                scrollbar={{ draggable: true }}
                pagination={{
                    type: "bullets",
                    clickable: true,
                    // bulletClass: 'swiper__bullet',
                    // bulletActiveClass: 'swiper__active__bullet'
                }}
                breakpoints={{
                    700: {
                        slidesPerView: 2
                    },
                    1050: {
                        slidesPerView: 3
                    },
                    1400: {
                        slidesPerView: 4
                    },
                    1700: {
                        slidesPerView: 5
                    }
                }}
            >
                {swiperData.map(data => (
                    <SwiperSlide key={data.id}>
                        <Slide data={data} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={styles.nav__buttons}>
                <button id='prev' className={styles.prev__button}>
                    <IoArrowBackOutline />
                </button>
                <button id='next' className={styles.next__button}>
                    <IoArrowForwardOutline />
                </button>
            </div>
        </section>
    )
}

export default HomeSwiper