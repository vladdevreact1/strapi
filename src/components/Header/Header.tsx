import React from 'react'
import styles from './Header.module.css'

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className='container'>
				<nav className={styles.header__nav}>
					<a href='#' className={styles.header__logo_link}>
						<img src='/src/assets/muhammad-logo.svg' alt='muhammad-logo' />
					</a>
					<ul className={styles.header__menu}>
						<li>
							<a href='#' className={styles.header__menu_link}>
								Home
							</a>
						</li>
						<li>
							<a href='#' className={styles.header__menu_link}>
								About
							</a>
						</li>
						<li>
							<a href='#' className={styles.header__menu_link}>
								Services
							</a>
						</li>
						<li>
							<a href='#' className={styles.header__menu_link}>
								Projects
							</a>
						</li>
						<li>
							<a href='#' className={styles.header__menu_link}>
								Testimonials
							</a>
						</li>
						<li>
							<a href='#' className={styles.header__menu_link}>
								Contact Us
							</a>
						</li>
						<li className={styles.header__download_box}>
							<button className={styles.header__download}>
								Download CV
							</button>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
