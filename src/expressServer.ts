import express from 'express'

export function init(){
    const app = express()

    app.get('/', function (req, res) {
        res.send('Hello World')
    })
    app.listen(3000)

}