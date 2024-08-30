import React from 'react'
import styles from './breadcrumb.module.css'
import { Link } from 'react-router-dom'

const BreadCrumb = ({ linkData = [] }) => {
    return (
        <section className={`${styles.breadcrumb} container`}>
            {
                linkData.map((link, index) => (
                    <>
                        {index !== 0 && <div className={styles.line}></div>}
                        <Link to={link.path} className={index === linkData.length - 1 ? styles.last__link : ''}>{link.title}</Link>
                    </>
                ))
            }
        </section>
    )
}

export default BreadCrumb