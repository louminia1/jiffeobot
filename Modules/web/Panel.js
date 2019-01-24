const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require("body-parser");
const path = require("path");

class websoket {
    constructor(token, port, client) {
        this.token = token
        this.client = client

        this.app = express()
        this.app.engine('hbs', hbs({
            extname: 'hbs',
            defaultLayout: 'layout',
            layoutsdir: __dirname + '/layouts'
        }))
        this.app.set('views', path.join(__dirname, 'Users'))
        this.app.set('view engine', 'hbs')
        this.app.use(express.static(path.join(__dirname, 'public')))
        this.app.use(bodyParser.urlencoded({ extended: false}))
        this.app.use(bodyParser.json())

        this.registerRoots()

        this.serveur = this.app.listen(port, () => {
            console.log(`Websocket listing on port ${this.serveur.address().port}`)
        })
    }
    checkToken(_token) {
        return (token === this.token)
    }

    registerRoots() {
        this.app.get('/', (req, res) => {
            var _token = req.query.token

            if(!this.checkToken(_token)){
                
            }
        })
    }
}