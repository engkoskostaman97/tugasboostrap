const express = require('express')

const app = express()

app.get('/', function (request, response) {
    response.send("Hello word")
})

app.get('/user', function (request, response) {
    response.send("Hello User")
})

app.get('/contact', function (request, response) {
    response.send("Form Contact")
})

app.listen(5000, function () {
    console.log("server running");
})