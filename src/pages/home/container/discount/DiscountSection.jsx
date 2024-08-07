import React from 'react'
import styles from './discount.module.css'
import { customImages } from '../../../../images'
import { ShopButton } from '../../../../components/buttons/ShopButton'

const DiscountSection = () => {
    return (
        <section className={styles.discount}>
            <div className={styles.bg}>
                <img src={customImages.discount} alt="discount" />
            </div>
            <article className={styles.content}>
                <div className={styles.content__inner}>
                    <h2 className={styles.title}>20% discount</h2>
                    <p>
                        Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                    </p>
                    <ShopButton />
                </div>
            </article>
        </section>
    )
}

export default DiscountSection