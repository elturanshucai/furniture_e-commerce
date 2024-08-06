import React from 'react'
import styles from './about.module.css'
import { aboutImage } from '../../../../images'
import { Link } from 'react-router-dom'

const AboutSection = () => {
    return (
        <section className={`${styles.about} container`}>
            <h2 className={styles.title}>
                About us
            </h2>
            <article className={styles.content}>
                <div className={styles.image}>
                    <img src={aboutImage.about} alt="furniture about" />
                </div>
                <div className={styles.text}>
                    <p>
                        Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                    </p>
                    <Link to={"about"} className={styles.learn}>Learn more</Link>
                </div>
            </article>
        </section>
    )
}

export default AboutSection