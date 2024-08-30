import React from 'react'

import styles from './Services.module.css'

const Services: React.FC = () => {
	return (
		<section className={styles.services}>
			<div className='container'>
				<h2 className={styles.services_title}>Services</h2>
				<p className={styles.services_description}>
					Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
					felis ligula aliquam venenatis fghh hgjj nisi ante.
				</p>
				<ul className={styles.services_list}>
					<li className={styles.services_item}>
						<img src='/src/assets/ui_ux_services.svg' alt='ui_ux_services' 
                        className={styles.services_icon} />
						<h3>UI/UX</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
							nibh
						</p>
					</li>
					<li className={styles.services_item}>
						<img
							src='/src/assets/web_design_services.svg'
							alt='web_design_services' 
                            className={styles.services_icon}
						/>
						<h3>Web Design</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
							nibh
						</p>
					</li>
					<li className={styles.services_item}>
						<img
							src='/src/assets/app_design_services.svg'
							alt='app_design_services' 
                            className={styles.services_icon}
						/>
						<h3>App Design</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
							nibh
						</p>
					</li>
					<li className={styles.services_item}>
						<img
							src='/src/assets/graphic_design_services.svg'
							alt='graphic_design_services' 
                            className={styles.services_icon}
						/>
						<h3>Graphic Design</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
							nibh
						</p>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default Services
