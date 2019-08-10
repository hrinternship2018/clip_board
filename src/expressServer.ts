import express from 'express'

export function init(){
    const app = express()
    let content = ''

    app.get('/', function (req, res) {
        res.sendFile(process.cwd() + '/page/index.html')
    })

    app.post('/post', function (req, res) {
        console.log(req.headers.text)
        content = (req.headers.text || '') as string
        res.send('posted')
    })

    app.get('/data', function (req, res) {
        console.log('sended')
        res.set('Content-Type', 'text/plain');
        res.send(content)
    })

    app.listen(3000)

}