
const http = require('http');

const PORT = 5000;

const ip = 'localhost';

const server = http.createServer((request, response) => {
  // console.log(
  //     `http request method is ${request.method}, url is ${request.url}`
  // );
  // response.writeHead(200, defaultCorsHeader);
  // response.end('hello mini-server sprints');
  if(request.method === 'POST'){
    if(request.url === '/lower'){
      let body = []
      request.on('data', chunk =>{
        body.push(chunk)
      })
      request.on('end',()=>{
        body=Buffer.concat(body).toString().toLowerCase();
        response.writeHead(201,defaultCorsHeader)
        response.end(body)
      })
    } else if(request.url === '/upper'){
      let body =[]
      request.on('data', chunk =>{
        body.push(chunk)
      })
      request.on('end',()=>{
        body = Buffer.concat(body).toString().toUpperCase();
        response.writeHead(201,defaultCorsHeader)
        response.end(body)
      })
    } else {
      response.writeHead(401, defaultCorsHeader)
      response.end(console.log('에러남'))
    }
  }
  if(request.method ==='OPTIONS'){
    response.writeHead(200,defaultCorsHeader)
    response.end()
  }
});

server.listen(PORT, ip, () => {
  console.log(`http server listen on ${ip}:${PORT}`);
});

const defaultCorsHeader = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
  'Access-Control-Max-Age': 10
};