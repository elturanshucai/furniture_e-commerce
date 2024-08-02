import React from 'react'
import styles from './authLayout.module.css'
import { Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const AuthLayout = () => {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    )
}

export default AuthLayout