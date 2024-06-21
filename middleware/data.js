const mongoConnect = require('../mongo-client/connect')

module.exports = function(req, res, next) {
    mongoConnect().then( function(client) {
        client.db('higo').collection('app_users').find()
        .toArray().then( function(value) {
            const data = {}

            if (req.query.location) {
                value = value.filter( function(value) {
                    return (value['Name of Location'] == req.query.location)
                })
            }

            if (req.query['page-number'] && (req.query['page-number'] < 1)) {
                req.query['page-number'] = Math.ceil(value.length / (req.query['page-length'] || 50)) + 1 + req.query['page-number']
            }

            for (const row of value) {
                if (Object.keys(data).length > ((req.query['page-length'] || 50) * (req.query['page-number'] || 1))) {
                    break
                }

                if (!(data[row['Name']])) {
                    data[row['Name']] = []
                }

                (data[row['Name']]).push(row)
            }

            res.data = Object.entries(data).slice((req.query['page-length'] || 50) * ((req.query['page-number'] || 1) - 1))

            next()
        })
    })
}
