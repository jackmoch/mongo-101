'use strict';

const { MongoClient } = require('mongodb')
const MONGODB_URL = 'mongodb://localhost:27017/test'

MongoClient.connect(MONGODB_URL, (err, db) => {
	console.log(db)
})

