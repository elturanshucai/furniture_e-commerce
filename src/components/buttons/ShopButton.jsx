import React, { useCallback } from 'react'
import styles from './buttons.module.css'
import { useNavigate } from 'react-router-dom'
import { icons } from '../../images'

export const ShopButton = ({ disabled = false }) => {
    const clickButton = useCallback(() => {
        const navigate = useNavigate()
        navigate("/sale")
    }, [])

    return (
        <button
            className={styles.shop__button}
            disabled={disabled && true}
            onClick={clickButton}
        >
            <div className={styles.shop__icon}>
                <img src={icons.shopIcon} alt="shop" />
            </div>
            <span>
                Shop Now
            </span>
        </button>
    )
}