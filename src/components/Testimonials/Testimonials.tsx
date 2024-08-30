import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import styles from './Testimonials.module.css'
import { A11y, Pagination, Scrollbar } from 'swiper/modules'
import { testimonialsSwiper } from '../../utils/data'
import { TestimoniesData } from '../../utils/interface'

const Testimonials: React.FC = () => {
	// const SliderRef = useRef<any>(null)
    // const handlerPrev = () => {
    //     SliderRef.current.Swiper.sliderPrev()
    // }
    // const handlerNext = () => {
    //     SliderRef.current.Swiper.sliderNext()
    // }

	return (
		<section className={styles.testimonials}>
			<h2 className={styles.testimonials_title}>Testimonials</h2>
			<p className={styles.testimonials_description}>
				Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
				felis ligula aliquam venenatis fghh hgjj nisi ante.
			</p>
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
				{/* <div>
					<button
						className={styles.paginationBullet}
						onClick={() => {
							handlerPrev()
						}}
					></button>
					<button
						className={styles.paginationBullet}
						onClick={() => {
							handlerPrev()
						}}
					></button>
					<button
						className={styles.paginationBullet}
						onClick={() => {
							handlerPrev()
						}}
					></button>
					<button
						className={styles.paginationBullet}
						onClick={() => {
							handlerPrev()
						}}
					></button>
				</div> */}
			</Swiper>
		</section>
	)
}

export default Testimonials
