const mongoConnect = require('../mongo-client/connect')

module.exports = function(req, res, next) {
    mongoConnect().then( function(client) {
        client.db('higo').collection('app_users').find()
        .toArray().then( function(value) {

            const unique = value.reduce( function(value, row) {
                value[row['Name']] = (value[row['Name']] || 0) + 1

                return value
            }, {})

            const dates = value.reduce( function(value, row) {
                value[row['Date']] = (value[row['Date']] ? value[row['Date']].concat(row['Name']) : [row['Name']])

                return value
            }, {})

            const times = value.reduce( function(value, row) {
                value[row['Login Hour']] = (value[row['Login Hour']] ? value[row['Login Hour']].concat(row['Name']) : [row['Name']])

                return value
            }, {})

            res.analytics = {

                unique_total: Object.keys(unique).length,

                new_total: Object.keys(unique).filter( function(value) {
                    return unique[value] === 1
                })
                .length,

                returning_total: Object.keys(unique).filter( function(value) {
                    return unique[value] > 1
                })
                .length,

                jumlah_per_hari: Object.keys(dates).map( function(date) {
                    const unique = dates[date].reduce( function(value, name) {
                        value[name] = (value[name] || 0) + 1

                        return value
                    }, {})

                    return {

                        used_at: date,

                        unique: Object.keys(unique).length,

                        new: Object.keys(unique).filter( function(value) {
                            return unique[value] === 1
                        })
                        .length,

                        returning: Object.keys(unique).filter( function(value) {
                            return unique[value] > 1
                        })
                        .length,

                    }
                }),

                hari_ramai: Object.keys(dates)
                .sort( function(a, b) {
                    if (dates[a].length > dates[b].length) {
                        return -1
                    }

                    return 0
                })
                [0],

                jam_ramai: Object.keys(times).sort( function(a, b) {
                    if (times[a].length > times[b].length) {
                        return -1
                    }

                    return 0
                })
                [0],

                age_group: {
                    '<30': value.filter( function(row) {
                        return ((new Date()).getFullYear() - row['Age']) < 30
                    })
                    .length,

                    '30-55': value.filter( function(row) {
                        return ((new Date()).getFullYear() - row['Age']) > 30 && (
                            ((new Date()).getFullYear() - row['Age']) < 55
                        )
                    })
                    .length,

                    '>55': value.filter( function(row) {
                        return ((new Date()).getFullYear() - row['Age']) > 55
                    })
                    .length

                },

                gender: {
                    'man': value.filter( function(row) {
                        return row.gender == 'Male'
                    })
                    .length,

                    'woman': value.filter( function(row) {
                        return row.gender == 'Female'
                    })
                    .length

                },

                device: value.filter( function(row, index, value) {
                    return value.findIndex( function(value) {
                        return value['Brand Device'] == row['Brand Device']
                    }) === index
                })
                .reduce(function (device, row) {
                    device[row['Brand Device']] = value.filter(function (value) {
                        return value['Brand Device'] === row['Brand Device']
                    })
                    .length

                    return device
                }, {}),

                digital_interest: value.filter( function(row, index, value) {
                    return value.findIndex( function(value) {
                        return value['Digital Interest'] == row['Digital Interest']
                    }) === index
                })
                .reduce( function(interest, row) {
                    interest[row['Digital Interest']] = value.filter(function (value) {
                        return value['Digital Interest'] === row['Digital Interest']
                    })
                    .length

                    return interest
                }, {}),

                user_data: Object.keys(unique).map( function(user, index) {
                    user = { name: user }
                    user.index = index + 1
                    user.total = unique[user.name]
                    user.data = value.filter( function(row) {
                        return row['Name'] == user.name
                    })

                    return user
                }),

                locations: value.filter((row, index, data) => {
                    return data.findIndex( function(value) {
                        return value['Name of Location'] == row['Name of Location']
                    }) === index
                })

            }

            next()

        })
    })
}
