import React from 'react'
import styles from './Main.module.css'
import Home from '../Home/Home'

const Main: React.FC = () => {
	return (
		<main className={styles.main}>
			<Home />
		</main>
	)
}

export default Main
