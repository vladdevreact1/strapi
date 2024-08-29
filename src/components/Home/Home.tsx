import React, { useEffect } from 'react'
import styles from './Home.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { fetchHeroes } from '../../redux/apiSlice'

const Home: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>()
	const heroes = useSelector((state: RootState) => state.api.heroes)
	const status = useSelector((state: RootState) => state.api.status)
	// const error = useSelector((state: RootState) => state.api.error)
	console.log(heroes)
	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchHeroes())
		}
	}, [status, dispatch, heroes])

	// if (status === 'loading') {
	// 	return <div>Loading...</div>
	// }

	// if (status === 'failed') {
	// 	return <div>Error: {error}</div>
	// }
	return (
		<section className={styles.section__home}>
			<div className='container'>
				<div className={styles.home__contents}>
					{heroes &&
						heroes.map((hero, index) => (
							<div key={index} className={styles.home__contentsElements}>
								<span className={styles.home__contentsItem}>Hi I am</span>
								<h1 className={styles.home__contentsName}>{hero.attributes.title}</h1>
								<h2 className={styles.home__contentsPosition}>{hero.attributes.subtitle}</h2>
								<h2 className={styles.home__contentsPositionName}>{hero.attributes.posWork}</h2>
								<p className={styles.home__contentsDescription}>
									{hero.attributes.description}
								</p>
								<button type='button' className={styles.home__contentsBtn}>
									Hire Me
								</button>
							</div>
						))}
					{/* <div className={styles.home__contentsElements}>
						<span className={styles.home__contentsItem}>Hi I am</span>
						<h1 className={styles.home__contentsName}>Muhammad Bin Jameel</h1>
						<h2 className={styles.home__contentsPosition}>UI & UX</h2>
						<h2 className={styles.home__contentsPositionName}>Designer</h2>
						<p className={styles.home__contentsDescription}>
							Lorem ipsum dolor sit amet consectetur. Imperdiet convallis
							blandit felis ligula aliquam venenatis nisi ante. Aliquet ornare
							tellus consectetur lacus
						</p>
						<button type='button' className={styles.home__contentsBtn}>
							Hire Me
						</button>
					</div> */}
					<div className={styles.containerPhotoAndLinks}>
						<img src='/src/assets/home_user.png' alt='home_user' />
						<ul className={styles.home__contacts}>
							<li>
								<a href='' className={styles['home__contacts-link']}>
									<img
										src='/src/assets/Facebook - Negative.svg'
										alt='Facebook'
									/>
								</a>
							</li>
							<li>
								<a href='' className={styles['home__contacts-link']}>
									<img src='/src/assets/Twitter - Negative.svg' alt='Twitter' />
								</a>
							</li>
							<li>
								<a href='' className={styles['home__contacts-link']}>
									<img
										src='/src/assets/Instagram - Negative.svg'
										alt='Instagram'
									/>
								</a>
							</li>
							<li>
								<a href='' className={styles['home__contacts-link']}>
									<img
										src='/src/assets/LinkedIn - Negative.svg'
										alt='LinkedIn'
									/>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Home
