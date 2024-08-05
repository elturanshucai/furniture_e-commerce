import React from 'react'
import styles from './footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.top}>
        <h2 className={styles.title}>HomeDecor</h2>
        <article className={styles.info}>
          <div>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
          </div>
          <Link to={"tel:+994 50 555 55 55"}>+994 50 555 55 55</Link>
          <Link to={"mailto:youremailhere@gmail.com"}>youremailhere@gmail.com</Link>
        </article>
      </section>
      <p className={styles.p}>
        ©2022 All Right Reserved. Developed by Webcoder Agency
      </p>
    </footer>
  )
}

export default Footer