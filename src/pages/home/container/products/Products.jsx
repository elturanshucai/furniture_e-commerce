import React from 'react'
import styles from './products.module.css'
import { Link } from 'react-router-dom'
import { productImages } from '../../../../images'
import Card from '../../../../components/card/Card'

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
        image: productImages.product1,
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
        image: productImages.product1,
        isLiked: false
    },
    {
        id: 5,
        title: 'Grayson Premium Grey Wash Nest of Tables',
        price: 140,
        image: productImages.product1,
        isLiked: false
    },
    {
        id: 6,
        title: 'Grayson Premium Grey Wash Nest of Tables',
        price: 140,
        image: productImages.product1,
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

const Products = () => {
    return (
        <section className={`${styles.products} container`}>
            <div className={styles.top}>
                <h2 className={styles.section__title}>Products</h2>
                <Link to={"/products"} className={styles.top__link}>
                    See all
                </Link>
            </div>
            <div className={styles.content}>
                {data.map(product => (
                    <Card product={product} />
                ))}
            </div>
            <Link to={"/product"} className={styles.bottom__link}>see all</Link>
        </section>
    )
}

export default Products