var http = require ('http');
var node = require ('./node');


// var module = require ('module')

// console.log(node.greeting())
// console.log(node.x)
// console.log(node.num)
// console.log(module.builtinModules)

// var http = require('http');
// http.createServer(function (req, res) {
    
//     console.log("server is running")
//     console.log('----', req.url)
//     // console.log(req)
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   //'text/plain'
//   //'text/html'
//   //'application/json'
//     res.write(node.greeting());
// //   res.end('Hello World!');
//   res.end();
// }).listen(8080);

// var http = require('http');
// var url = require('url');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   var q = url.parse(req.url, true).query;
//   var txt = q.year + " " + q.month;
//   res.end(txt);
// }).listen(8080);
// // http://localhost:8080/?year=2017&month=July


// auto conn
// http.createServer(function (req, res) {
//     console.log("server is running")
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   if (req.url === '/') {
//     res.write(node.greeting());
//   }else{
//     res.write(req.url);
//   }

//   res.end();
// })
// .listen(8080);
http.createServer(function (req, res) {
        console.log("server is running")
      res.writeHead(200, {'Content-Type': 'text/html'});
      if (req.url === '/') {
        res.write(node.greeting());
      }else{
        res.write(req.url);
      }
    
      res.end();
    })
    .listen(8080);