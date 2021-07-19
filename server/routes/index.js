module.exports = app => {
    app.use('/api', require('./auth.routes.js'))
    app.use('/api/admin', require('./admin.routes'))
    app.use('/api/user', require('./user.routes'))
    app.use('/api/review', require('./review.routes'))
    app.use('/api/company', require('./company.routes'))
    app.use('/api/destination', require('./destination.routes'))
    app.use('/api/airport', require('./airport.routes'))
    app.use('/api/flight', require('./flight.routes'))
}
