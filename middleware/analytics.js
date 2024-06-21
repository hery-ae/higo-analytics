const mongoConnect = require('../mongo-client/connect')

module.exports = function(req, res, next) {
    mongoConnect().then( function(client) {
        client.db('higo').collection('app_users').find()
        .toArray().then( function(value) {

            const analytics = value.reduce( function(data, value) {
                switch (data.name[value['Name']]) {
                    case 'new':
                        data.name[value['Name']] = 'returning'
                        data.returning += 2
                        data.new -= 1
                        break

                    case 'returning':
                        data.name[value['Name']] = 'returning+'
                        data.returning += 1
                        break

                    default:
                        data.name[value['Name']] = 'new'
                        data.new += 1
                        data.unique += 1
                }

                if (!(data.date[value['Date']])) {
                    data.date[value['Date']] = {}
                    data.data_by_date[value['Date']] = {
                        new: 0,
                        returning: 0,
                        unique: 0
                    }
                }

                switch (data.date[value['Date']]?.[value['Name']]) {
                    case 'new':
                        data.date[value['Date']][value['Name']] = 'returning'
                        data.data_by_date[value['Date']].returning += 2
                        data.data_by_date[value['Date']].new -= 1
                        break

                    case 'returning':
                        data.date[value['Date']][value['Name']] = 'returning+'
                        data.data_by_date[value['Date']].returning += 1
                        break

                    default:
                        data.date[value['Date']][value['Name']] = 'new'
                        data.data_by_date[value['Date']].new += 1
                        data.data_by_date[value['Date']].unique += 1
                }

                if ((data.data_by_date[value['Date']].new + data.data_by_date[value['Date']].returning) > (data.peak_date.total || 0)) {
                    data.peak_date = {
                        date: value['Date'],
                        total: (
                            data.data_by_date[value['Date']].new + data.data_by_date[value['Date']].returning
                        )
                    }
                }

                data.time[value['Login Hour']] = (data.time[value['Login Hour']] || 0) + 1

                if (data.time[value['Login Hour']] > (data.peak_time.total || 0)) {
                    data.peak_time = {
                        time: value['Login Hour'],
                        total: (
                            data.time[value['Login Hour']]
                        )
                    }
                }

                data.gender[value['gender']] = (data.gender[value['gender']] || 0) + 1
                data.device[value['Brand Device']] = (data.device[value['Brand Device']] || 0) + 1
                data.interest[value['Digital Interest']] = (data.interest[value['Digital Interest']] || 0) + 1

                if (data.name[value['Name']] === 'new') {
                    const now = new Date()
                    const age = now.getFullYear() - Number(value['Age'])

                    switch (true) {
                        case (age < 30):
                            data.age_group['<30'] += 1
                            break

                        case (age > 55):
                            data.age_group['>55'] += 1
                            break

                        default:
                            data.age_group['30-55'] += 1
                    }
                }

                if (!(data.locations.includes(value['Name of Location']))) {
                    data.locations.push(value['Name of Location'])
                }

                return data
            },
            {
                new: 0,
                returning: 0,
                unique: 0,
                data_by_date: {},
                peak_date: {},
                peak_time: {},
                gender: {},
                device: {},
                interest: {},
                age_group: {
                    '<30': 0,
                    '30-55': 0,
                    '>55': 0
                },
                locations: [],
                name: {},
                date: {},
                time: {}
            })

            delete analytics.name
            delete analytics.date
            delete analytics.time

            res.analytics = analytics

            next()

        })
    })
}
