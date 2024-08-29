import React from 'react'
import styles from './Header.module.css'

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className='container'>
				<nav className={styles.header__nav}>
					<a href='/src/App.tsx' className={styles['header__logo-link']}>
						<img src='/src/assets/muhammad-logo.svg' alt='muhammad-logo' />
					</a>
					<ul className={styles.header__menu}>
						<li>
							<a href='' className={styles['header__menu-link']}>
								Home
							</a>
						</li>
						<li>
							<a href='' className={styles['header__menu-link']}>
								About
							</a>
						</li>
						<li>
							<a href='' className={styles['header__menu-link']}>
								Services
							</a>
						</li>
						<li>
							<a href='' className={styles['header__menu-link']}>
								Projects
							</a>
						</li>
						<li>
							<a href='' className={styles['header__menu-link']}>
								Testimonials
							</a>
						</li>
						<li>
							<a href='' className={styles['header__menu-link']}>
								Contact Us
							</a>
						</li>
						<li className={styles['header__download-box']}>
							<a href='#' className={styles.header__download}>
								Download CV
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
