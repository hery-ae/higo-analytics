const mongoConnect = require('../mongo-client/connect')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')

module.exports = function(req, res, next) {
    mongoConnect().then( function(client) {
        if (req.headers['x-access-token']) {
            client.db('higo').collection('api_users').findOne({ 'access_tokens.token': req.headers['x-access-token'] }).then( function(user) {
                if (user) {
                    req.user = user
                }

                next()
            })

        } else {
            client.db('higo').collection('api_users').findOne({ username: req.body.username }).then( function(user) {
                if (user) {
                    bcrypt.compare(req.body.password, user.password, function(err, result) {
                        if (result === true) {
                            const accessToken = crypto.randomBytes(32).toString('hex')

                            user.access_tokens.push({
                                token: accessToken,
                                created_at: new Date()
                            })

                            user.access_tokens = user.access_tokens.filter( function(accessToken) {
                                const now = new Date()

                                return accessToken.created_at.getTime() > now.setMinutes(now.getMinutes() - 30)
                            })

                            req.access_token = accessToken

                            req.user = {
                                id: user._id,
                                username: user.username
                            }

                            client.db('higo').collection('api_users').updateOne({ _id: user._id }, {
                                $set: {
                                    access_tokens: user.access_tokens
                                }
                            })
                        }

                        next()
                    })

                } else {
                    next()
                }
            })
        }
    })
}
