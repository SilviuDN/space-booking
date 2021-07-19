module.exports = app => {
    app.use('/api', require('./auth.routes.js'))
    app.use('/api/admin', require('./admin.routes'))
    app.use('/api/user', require('./user.routes'))
    app.use('/api/reviews', require('./review.routes'))
}
