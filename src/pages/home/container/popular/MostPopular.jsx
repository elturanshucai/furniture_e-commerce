import React from 'react'
import styles from './popular.module.css'
import { productImages } from '../../../../images'
import { Swiper, SwiperSlide } from 'swiper/react'
import Card from '../../../../components/card/Card'
import { Navigation, Scrollbar } from 'swiper/modules'
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5'

const data = [
    {
        id: 1,
        title: 'Grayson Premium Grey Wash Nest of Tables',
        price: 140,
        image: productImages.product1,
        isLiked: false
    },
    {
        id: 2,
        title: 'Grayson Premium Grey Wash Nest of Tables',
        price: 140,
        image: productImages.product2,
        isLiked: false
    },
    {
        id: 3,
        title: 'Grayson Premium Grey Wash Nest of Tables',
        price: 140,
        image: productImages.product1,
        isLiked: false
    },
    {
        id: 4,
        title: 'Grayson Premium Grey Wash Nest of Tables',
        price: 140,
        image: productImages.product3,
        isLiked: true
    },
    {
        id: 5,
        title: 'Grayson Premium Grey Wash Nest of Tables',
        price: 140,
        image: productImages.product4,
        isLiked: false
    },
    {
        id: 6,
        title: 'Grayson Premium Grey Wash Nest of Tables',
        price: 140,
        image: productImages.product2,
        isLiked: false
    },
    {
        id: 7,
        title: 'Grayson Premium Grey Wash Nest of Tables',
        price: 140,
        image: productImages.product1,
        isLiked: false
    },
    {
        id: 8,
        title: 'Grayson Premium Grey Wash Nest of Tables',
        price: 140,
        image: productImages.product1,
        isLiked: false
    }
]

const MostPopular = () => {
    return (
        <section className={styles.popular}>
            <h2 className={styles.title}>
                Most popular
            </h2>
            {/* <div className={styles.content}> */}
                <Swiper
                    modules={[Navigation, Scrollbar]}
                    navigation={{
                        prevEl: '#prev-popular',
                        nextEl: '#next-popular'
                    }}
                    className={styles.content}
                    spaceBetween={30}
                    scrollbar={{ draggable: true }}
                    // breakpoints={{
                    //     650: {
                    //         slidesPerView:2
                    //     },
                    //     960: {
                    //         slidesPerView: 3
                    //     },
                    //     1300: {
                    //         slidesPerView: 4
                    //     },
                    //     1550: {
                    //         slidesPerView: 5
                    //     },
                    //     1850: {
                    //         slidesPerView: 6
                    //     }
                    // }}
                    slidesPerView={"auto"}
                >
                    {data.map(data => (
                        <SwiperSlide key={data.id} className={styles.slide}>
                            <Card product={data} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            {/* </div> */}
            <div className={styles.nav__buttons}>
                <button id='prev-popular' className={styles.prev__button}>
                    <IoArrowBackOutline />
                </button>
                <button id='next-popular' className={styles.next__button}>
                    <IoArrowForwardOutline />
                </button>
            </div>
        </section>
    )
}

export default MostPopular