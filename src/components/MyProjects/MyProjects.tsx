import React from 'react'

import styles from './MyProjects.module.css'

const MyProjects: React.FC = () => {
	return (
		<section className={styles.my_projects}>
			<div className='container'>
				<h2 className={styles.my_projects_title}>Services</h2>
				<p className={styles.my_projects_description}>
					Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
					felis ligula aliquam venenatis fghh hgjj nisi ante.
				</p>
				<ul className={styles.my_projects_list_btns}>
					<li>
						<button type='button' className={styles.my_projects_btn}>
							All
						</button>
					</li>
					<li>
						<button
							type='button'
							className={[styles.my_projects_btn, styles.active].join(' ')}
						>
							UI UX
						</button>
					</li>
					<li>
						<button type='button' className={styles.my_projects_btn}>
							Website Design
						</button>
					</li>
					<li>
						<button type='button' className={styles.my_projects_btn}>
							App Design
						</button>
					</li>
					<li>
						<button type='button' className={styles.my_projects_btn}>
							Graphic Design
						</button>
					</li>
				</ul>
				<ul className={styles.my_projects_list_pages}>
					<li className={styles.my_projects_page}>
						<div className={styles.my_projects_container_page}>
							<img
								className={styles.my_projects_page_image_first}
								src='/src/assets/my_projects_3.png'
								alt='my_projects_3'
							/>
							<img
								className={styles.my_projects_page_image_second}
								src='/src/assets/my_projects_4.png'
								alt='my_projects_4'
							/>
						</div>
						<span className={styles.my_projects_page_type}>UI UX</span>
						<p className={styles.my_projects_page_type_text}>
							AirCalling Landing Page Design
						</p>
					</li>
					<li className={styles.my_projects_page}>
						<div className={styles.my_projects_container_page}>
							<img
								className={styles.my_projects_page_image_first}
								src='/src/assets/my_projects_3.png'
								alt='my_projects_3'
							/>
							<img
								className={styles.my_projects_page_image_second}
								src='/src/assets/my_projects_4.png'
								alt='my_projects_4'
							/>
						</div>
						<span className={styles.my_projects_page_type}>UI UX</span>
						<p className={styles.my_projects_page_type_text}>
							AirCalling Landing Page Design
						</p>
					</li>
					<li className={styles.my_projects_page}>
						<div className={styles.my_projects_container_page}>
							<img
								className={styles.my_projects_page_image_first}
								src='/src/assets/my_projects_3.png'
								alt='my_projects_3'
							/>
							<img
								className={styles.my_projects_page_image_second}
								src='/src/assets/my_projects_4.png'
								alt='my_projects_4'
							/>
						</div>
						<span className={styles.my_projects_page_type}>UI UX</span>
						<p className={styles.my_projects_page_type_text}>
							AirCalling Landing Page Design
						</p>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default MyProjects
