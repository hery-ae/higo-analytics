const mongodb = require('mongodb')

const mongoClient = mongodb.MongoClient
const url = 'mongodb://localhost:27017'

module.exports = function() {
    return mongoClient.connect(url)
}
