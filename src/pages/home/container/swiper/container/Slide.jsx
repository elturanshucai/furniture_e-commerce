import React from 'react'
import styles from './slide.module.css'

const Slide = ({ data }) => {
    return (
        <article className={styles.slide}>
            <div className={styles.image}>
                <img src={data.img} alt="furniture" />
            </div>
            <p className={styles.title}>{data.title}</p>
        </article>
    )
}

export default Slide