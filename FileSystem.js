var http=require('http');
var fs=require('fs');
console.log("Go to port number 8000");
http.createServer(function(req,res){
	var t=fs.readFile('flexbox.html',function(err,data){

		if(err)
			console.log(err);
		else{
		res.writeHead(200,{'Content-Type':'text/html'});
		res.write(data);
		console.log(data);
		res.end();
	    }
	});
	console.log("done!!!!!");
}).listen(8000);