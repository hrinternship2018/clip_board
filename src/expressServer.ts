import express from 'express'

export function init(){
    const app = express()
    let content = ''

    app.use('/',express.static(process.cwd() + '/page'))

    app.post('/post', function (req, res) {
        console.log(req.headers.text)
        content = decodeURIComponent( (req.headers.text || '') as string )
        res.send('posted')
    })

    app.get('/data', function (req, res) {
        console.log('sended')
        res.set('Content-Type', 'text/plain');
        res.send(content)
    })

    app.listen(process.env.PORT || 3000)

}