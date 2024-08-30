import React from 'react'
import BreadCrumb from '../../components/breadcrumb/BreadCrumb'

const links = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/about',
        title: 'About'
    }
]

const About = () => {
    return (
        <>
            <BreadCrumb linkData={links} />
        </>
    )
}

export default About