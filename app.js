const express = require('express')
const auth = require('./middleware/auth')
const analytics = require('./middleware/analytics')
const data = require('./middleware/data')
const mongoConnect = require('./mongo-client/connect')

const app = express()
const port = 3000

app.use(express.static('./static'))

app.use(express.json())

app.use('/api/login', auth)
app.use('/api/analytics', [auth, analytics])
app.use('/api/data', [auth, data])

app.get('/api/analytics', (req, res) => {
    if (!req.user) res.status(403).end()

    res.json(res.analytics)
})

app.get('/api/data', (req, res) => {
    if (!req.user) res.status(403).end()

    res.json(res.data)
})

app.post('/api/login', function(req, res) {
    if (!req.user) res.status(401).end()

    res.json({
        access_token: req.access_token,
        user: req.user
    })
})

app.get('/api/logout', function(req, res) {
    if (!req.headers['x-access-token']) res.status(403).end()

    mongoConnect().then( function(client) {
        client.db('higo').collection('api_users').updateOne({ 'access_tokens.token': req.headers['x-access-token'] }, {
            $pull: {
                access_tokens: {
                    token: req.headers['x-access-token']
                }
            }
        })
        .then( function(result) {
            res.json(result)
        })
    })
})

app.listen(port, () => {
    console.log(port)
})
