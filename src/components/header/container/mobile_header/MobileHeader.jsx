import React, { useState } from 'react'
import styles from './mobile_header.module.css'
import { Link } from 'react-router-dom'
import { SlBasket } from 'react-icons/sl'
import { FaRegUser } from 'react-icons/fa'
import { IoCloseOutline } from 'react-icons/io5'
import Links from '../Links'

const MobileHeader = ({ setMenu, menu }) => {
    const [lang, setLang] = useState('az')
    const tabsFunctions = {
        az: () => setLang('az'),
        en: () => setLang('en'),
        ru: () => setLang('ru')
    }

    const clickTab = (e) => {
        let tabLang = e.target.id
        tabsFunctions[tabLang]()
    }
    return (
        <header className={`${styles.header__container} ${menu ? styles.open:''}`}>
            <div className={`${styles.mobile__header}`}>
                <div className={styles.header__top}>
                    <div className={styles.header__links}>
                        <Link to={"/sale"}>
                            <SlBasket size={20} />
                        </Link>
                        <Link to={"/account"}>
                            <FaRegUser size={20} />
                        </Link>
                    </div>
                    <button onClick={() => setMenu(false)}>
                        <IoCloseOutline size={28} />
                    </button>
                </div>
                <nav className={styles.mobile__navbar}>
                    <ul>
                        <Links />
                    </ul>
                </nav>
                <div className={styles.mobile__lang}>
                    <button
                        className={lang === 'az' ? styles.active : ''}
                        onClick={clickTab}
                        id='az'
                    >Az</button>
                    <button
                        className={lang === 'en' ? styles.active : ''}
                        onClick={clickTab}
                        id='en'
                    >En</button>
                    <button
                        className={lang === 'ru' ? styles.active : ''}
                        onClick={clickTab}
                        id='ru'
                    >Ru</button>
                </div>
            </div>
        </header>
    )
}

export default MobileHeader