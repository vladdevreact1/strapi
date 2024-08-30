import React from 'react'



import styles from './Home.module.css'


const Home: React.FC = () => {
	
	return (
		<section className={styles.section__home}>
			<div className='container'>
				<div className={styles.home__contents}>
					<div className={styles.home__contents_elements}>
						<span className={styles.home__contents_item}>Hi I am</span>
						<h1 className={styles.home__contents_name}>Muhammad Bin Jameel</h1>
						<h2 className={styles.home__contents_position}>UI & UX</h2>
						<h2 className={styles.home__contents_position_name}>Designer</h2>
						<p className={styles.home__contents_description}>
							Lorem ipsum dolor sit amet consectetur. Imperdiet convallis
							blandit felis ligula aliquam venenatis nisi ante. Aliquet ornare
							tellus consectetur lacus
						</p>
						<button type='button' className={styles.home__contents_btn}>
							Hire Me
						</button>
					</div>
					<div className={styles.container_photo_and_links}>
						<img src='/src/assets/home_user.png' alt='home_user' />
						<ul className={styles.home__contacts}>
							<li>
								<a href='' className={styles.home__contacts_link}>
									<img
										src='/src/assets/Facebook - Negative.svg'
										alt='Facebook'
									/>
								</a>
							</li>
							<li>
								<a href='' className={styles.home__contacts_link}>
									<img src='/src/assets/Twitter - Negative.svg' alt='Twitter' />
								</a>
							</li>
							<li>
								<a href='' className={styles.home__contacts_link}>
									<img
										src='/src/assets/Instagram - Negative.svg'
										alt='Instagram'
									/>
								</a>
							</li>
							<li>
								<a href='' className={styles.home__contacts_link}>
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
