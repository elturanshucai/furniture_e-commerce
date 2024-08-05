import React from 'react'
import { FaBars, FaRegUser } from 'react-icons/fa'
import { IoIosSearch } from 'react-icons/io'
import styles from './header.module.css'
import { Link } from 'react-router-dom'
import { SlBasket } from 'react-icons/sl'
import Links from '../Links'

const MainHeader = ({ setMenu }) => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.top}>
                    <div className={styles.left}>
                        <button className={styles.lang}>
                            Az
                        </button>
                        <button className={styles.search__button}>
                            <IoIosSearch size={24} />
                        </button>
                        <button className={styles.burger__button} onClick={() => setMenu(true)}>
                            <FaBars size={20} />
                        </button>
                    </div>
                    <h1 className={styles.title}>HomeDecor</h1>
                    <div className={styles.right}>
                        <Link to={"/sale"}>
                            <SlBasket />
                        </Link>
                        <Link to={"/account"}>
                            <FaRegUser />
                        </Link>
                    </div>
                </div>
                <nav>
                    <ul>
                        <Links />
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default MainHeader