'use strict';

const { MongoClient } = require('mongodb')
const MONGODB_URL = 'mongodb://localhost:27017/test'

MongoClient
	.connect(MONGODB_URL)
	.then(db => {
		db.collection('restaurants')
			.find()
			// .forEach((restaurant) => {
			// 	console.log(restaurant)
			// },
			// 	() => db.close()
			// )
			// .catch(console.error)
			.toArray()
			.then((restaurants) => {
				restaurants.forEach(restaurant => {
					console.log(restaurant)
				})
				.then(() => db.close())
			})
			.catch(console.error)

	})
	.catch(console.error)

