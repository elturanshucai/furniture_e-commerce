import React from 'react'
import styles from './collections.module.css'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { swiperImages } from '../../../../images'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'
import Slide from '../../../../components/slide/Slide'
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5'

const data = [
    {
        id: 1,
        title: "Bedroom",
        img: swiperImages.slide1
    },
    {
        id: 2,
        title: "Kithcen",
        img: swiperImages.slide2
    },
    {
        id: 3,
        title: "Living room",
        img: swiperImages.slide1
    },
    {
        id: 4,
        title: "Bathroom",
        img: swiperImages.slide2
    },
    {
        id: 5,
        title: "room",
        img: swiperImages.slide1
    }
]

const Collections = () => {
    return (
        <section className={styles.collections}>
            <div className={`${styles.content} container`}>
                <div className={styles.top}>
                    <h2 className={styles.title}>Collections</h2>
                    <Link to={"/collections"} className={styles.top__link}>see all</Link>
                </div>
                <Swiper
                    modules={[Navigation, Scrollbar, Pagination]}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        10: {
                            slidesPerView: 1
                        },
                        300: {
                            slidesPerView: "auto"
                        }
                    }}
                    scrollbar={{ draggable: true }}
                    navigation={{
                        prevEl: '#prev-collection',
                        nextEl: '#next-collection'
                    }}
                    className={styles.swiper}
                >
                    {data.map(item => (
                        <SwiperSlide key={item.id} className={styles.slide}>
                            <Slide data={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={styles.navs}>
                    <button id='prev-collection'>
                        <IoArrowBackOutline />
                    </button>
                    <button id='next-collection'>
                        <IoArrowForwardOutline />
                    </button>
                </div>
                <Link to={"/collections"} className={styles.bottom__link}>see all</Link>
            </div>
        </section>
    )
}

export default Collections