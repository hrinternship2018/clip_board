import * as http from 'http'

export function example(){
    console.log('open server')
    var server = http.createServer();

    server.on('request',function(req : http.IncomingMessage,res : http.ServerResponse) {
        console.log('Access')
        console.log(req.method)
        console.log(req.url)

        res.writeHead(200,{'Content-Type': 'text/plain'});
        res.write('hello world!');
        res.end();
        
    })
    //in heroku's, must use port will be given
    server.listen(process.env.PORT || 3000);
}