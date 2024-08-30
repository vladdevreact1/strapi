import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'



import { A11y, Pagination, Scrollbar } from 'swiper/modules'
import { testimonialsSwiper } from '../../utils/data'
import { TestimoniesData } from '../../utils/interface'

import styles from './Slider.module.css'

const Slider: React.FC = () => {

	return (
		
			<Swiper
				modules={[Pagination, Scrollbar, A11y]}
				spaceBetween={200}
				slidesPerView={2}
				centeredSlides={true}
				slideToClickedSlide={true}
			>
				{testimonialsSwiper &&
					testimonialsSwiper.map((item: TestimoniesData, index) => (
						<SwiperSlide key={index}>
							{({ isActive, isPrev }) => (
								<div
									className={
										isActive
											? [styles.testimonials_item, styles.activeItem].join(' ')
											: isPrev
											? [styles.testimonials_item, styles.prevItem].join(' ')
											: [styles.testimonials_item, styles.nextItem].join(' ')
									}
								>
									<img
										src={item.image}
										alt={item.author}
										className={styles.testimonials_item_image}
									/>
									<div>
										<p className={styles.testimonials_item_text}>
											<span className={styles.testimonials_marks}>"</span>
											<span className={styles.testimonials_item_description}>
												{item.text}
											</span>
											<span className={styles.testimonials_marks}> "</span>
										</p>
										<h3 className={styles.testimonials_item_name}>
											{item.author}
										</h3>
										<span className={styles.testimonials_item_position}>
											{item.position}
										</span>
									</div>
								</div>
							)}
						</SwiperSlide>
					))}
			</Swiper>
	)
}

export default Slider
