const express = require('express')
const http = require('http')
const path = require('path')
const env = require('node-env-file')

const app = express()

app.set('view engine', 'pug')

app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))


// Middlewares
env('./.env')

app.use(express.urlencoded({extended: true}))


// Sever
app.set('port', process.env.PORT || 1000)

const router = require('./routes/router') 

app.use('/', router())


app.use((req, res, next) => {
    
    res.status(404)

    res.render('404', { url: req.url })
    return

})


const port = app.get('port')

const server =http.createServer(app)

server.listen(port)