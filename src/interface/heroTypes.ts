// src/types/heroTypes.ts

export interface HeroAttributes {
	title?: string
	subtitle?: string
	description?: string
	createdAt?: string
	updatedAt?: string
	publishedAt?: string
	posWork?: string
}

export interface Hero {
	id: number
	attributes: HeroAttributes
}

export interface ApiResponse {
	data: Hero[]
}
