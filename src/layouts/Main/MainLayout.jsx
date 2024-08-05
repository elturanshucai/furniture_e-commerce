import React from 'react'
import styles from './mainLayout.module.css'
import { Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const MainLayout = () => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default MainLayout