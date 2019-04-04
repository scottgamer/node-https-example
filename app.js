const express = require('express')
const fs = require('fs')
const https = require('https')
const app = express()

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('hello world')
})

const server = https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
    passphrase: '1234'
}, app);

server.listen(port, () => {
    console.log(`Server runnning on port ${port}`)
})