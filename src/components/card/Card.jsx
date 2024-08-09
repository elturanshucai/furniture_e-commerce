import React from 'react'
import styles from './card.module.css'
import { useNavigate } from 'react-router-dom'
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";

const Card = ({ product }) => {
  const nav = useNavigate()
  const clickArticle = (id) => {
    nav(`product/${product.id}`)
  }

  const likeProduct = (e, id) => {
    e.stopPropagation()
  }
  return (
    <article className={styles.card} onClick={clickArticle}>
      <button onClick={(e) => likeProduct(e, product.id)} className={styles.like__button}>
        {product.isLiked ?
          <IoMdHeart /> :
          <IoIosHeartEmpty />
        }
      </button>
      <div className={styles.img}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.card__info}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.price}>
          {product.price} $
        </p>
      </div>
    </article>


  )
}

export default Card