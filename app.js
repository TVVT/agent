var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage. 
//   }
// })

var http = require('http');
http.createServer(function (req, res) {
  var p = req.url;

  var url = 'http://10.161.144.23:8080';

  console.log(url+p);

  res.setHeader('Access-Control-Allow-Origin', '*');



  // res.writeHead(200, {'Content-Type': 'text/plain'});
  // res.end('Hello World\n');
	 request({
	    method: req.method,
	    url: url+p,
	    headers: req.headers,
	    timeout:3000
	}).on('error', function (err) {
	    res.status('404');
	    res.send('');
	}).pipe(res);

}).listen(8080, '127.0.0.1');


console.log('Server running at http://127.0.0.1/');
