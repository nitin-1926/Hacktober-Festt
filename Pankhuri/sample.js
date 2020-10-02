var http=require('http');
console.log('Server is active go to port number 9000');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write("Hello Welcome");
	res.end();
}).listen(9000);