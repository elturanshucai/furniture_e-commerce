import React from 'react'
import styles from './card.module.css'
import { Link } from 'react-router-dom'

const Card = ({ product }) => {
  return (
    <Link to={`product/${product.id}`} className={styles.card}>
      <div className={styles.img}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.card__info}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.price}>
          {product.price} $
        </p>
      </div>
    </Link>
  )
}

export default Card