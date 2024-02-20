const http = require('http')
const fs = require('fs')
const fileConstent = fs.readFileSync('tut33.html')

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type':'text/html'});
    res.end(fileConstent)
})

server.listen(80, '127.0.0.1', ()=>{
    console.log("Listening On port 80")
})