const express = require('express')
const routes = require('./routes')
const passport = require('./config/passport')
// const { getUser } = require('./helpers/auth-helpers')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(passport.initialize())
app.use('/api', routes)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app
