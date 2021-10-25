import React from 'react'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import FaqSections from '../components/FaqSections'

//Animations
import { pageAnimation } from '../animation'
import { motion } from 'framer-motion'
const AboutUs = () => {
    return (
        <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            <AboutSection />
            <ServicesSection />
            <FaqSections />


        </motion.div>
    )
}

export default AboutUs
