'use strict';

const { MongoClient } = require('mongodb')
const MONGODB_URL = 'mongodb://localhost:27017/test'

MongoClient
.connect(MONGODB_URL)
.then(db => {
	console.log(db)
	db.close()
})

