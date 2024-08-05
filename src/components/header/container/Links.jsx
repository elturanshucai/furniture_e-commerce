import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './main_header/header.module.css'

const linkData = [
    {
        title: 'Home',
        url: '/'
    },
    {
        title: 'About',
        url: '/about'
    },
    {
        title: 'Products',
        url: '/products'
    },
    {
        title: 'Collections',
        url: '/collections'
    },
    {
        title: 'Sale',
        url: '/sale'
    },
    {
        title: 'Contact',
        url: '/contact'
    }
]

const Links = () => {
    return (
        <>
            {linkData.map(link => (
                <li key={link.title}>
                    <NavLink to={link.url} className={({ isActive }) => isActive ? styles.active__link : styles.link}>
                        {link.title}
                    </NavLink>
                </li>
            ))}
        </>
    )
}

export default React.memo(Links)