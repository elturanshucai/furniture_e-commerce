import React from 'react'
import styles from './hero.module.css'
import { heroImages } from '../../../../images'
import { ShopButton } from '../../../../components/buttons/ShopButton'

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.hero__left}>
                <h2 className={styles.hero__title}>
                    THE FURNITURE THAT DEFINES YOU
                </h2>
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                </p>
                <ShopButton />
            </div>
            <div className={styles.hero__image}>
                <img src={heroImages.hero} alt="home furniture" />
            </div>
        </section>
    )
}

export default Hero