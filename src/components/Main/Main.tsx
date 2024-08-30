import React from 'react'
import styles from './Main.module.css'
import Home from '../Home/Home'
import AboutUs from '../AboutUs/AboutUs'
import Services from '../ServicesSection/Services'
import MyProjects from '../MyProjects/MyProjects'
import Testimonials from '../Testimonials/Testimonials'

const Main: React.FC = () => {
	return (
		<main className={styles.main}>
			<Home />
			<AboutUs />
			<Services />
			<MyProjects />
			<Testimonials />
		</main>
	)
}

export default Main
