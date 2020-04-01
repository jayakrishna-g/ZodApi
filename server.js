const express = require('express')
const config = require('./db/config')
const playerLib = require('./db/lib/player')
const db = require('./db/connect')

const app = express()


db.connect()

const port = config.port

app.get('/api/players', (req,res) => {
    playerLib.getAllPlayers(function(err,players) {
        res.json(players)
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))