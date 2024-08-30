import React from 'react'

import styles from './AboutUs.module.css'

const AboutUs: React.FC = () => {
	return (
		<section className={styles.about_us}>
			<div className='container'>
				<div className={styles.about_flex_container}>
					<img
						src='/src/assets/about-us.png'
						alt='About Us'
						className={styles.about_image}
					/>
					<ul>
						<li className={styles.about_list_item}>
							<h2 className={styles.about_heading}>About Me</h2>
						</li>
						<li className={styles.about_list_item}>
							<p className={styles.about_description}>
								Lorem ipsum dolor sit amet consectetur. Imperdiet convallis
								blandit felis ligula aliquam venenatis nisi ante. Aliquet ornare
								tellus consectetur lacus
							</p>
						</li>
						<li className={styles.about_list_item}>
							<span className={styles.about_item_title}>UX</span>
							<img src='/src/assets/UX.svg' alt='UX' />
						</li>
						<li className={styles.about_list_item}>
							<span className={styles.about_item_title}>Website Design</span>
							<img src='/src/assets/Website Design.svg' alt='Website Design' />
						</li>
						<li className={styles.about_list_item}>
							<span className={styles.about_item_title}>App Design</span>
							<img src='/src/assets/App Design.svg' alt='App Design' />
						</li>
						<li className={styles.about_list_item}>
							<span className={styles.about_item_title}>Graphic Design</span>
							<img src='/src/assets/Graphic Design.svg' alt='Graphic Design' />
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default AboutUs
