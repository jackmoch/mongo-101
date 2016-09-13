'use strict';

const { MongoClient } = require('mongodb')
const MONGODB_URL = 'mongodb://localhost:27017/test'
const [, , ...args] = process.argv;
const name = RegExp(`^${args.join(' ')}`, 'i')

MongoClient
	.connect(MONGODB_URL)
	.then(db => {
		db.collection('restaurants')
			.find({ name })
			.sort({ name: 1 })
			// .forEach((restaurant) => {
				// if (restaurant.name) {
				// 	console.log(restaurant.name)
				// }
			// },
			// 	() => db.close()
			// )
			// .catch(console.error)
			.toArray()
			.then((restaurants) => {
				restaurants.forEach(restaurant => {
					if (restaurant.name) {
						console.log(restaurant.name)
					}
				})
			})
			.then(() => db.close())
			.catch(console.error)
	})
	.catch(console.error)

