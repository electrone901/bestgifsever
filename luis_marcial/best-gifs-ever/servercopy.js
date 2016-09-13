var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, resp){
	var url = req.url;

	if (url === '/'){
		fs.readFile('index.html', function(err,data){
			response.write(data.toString());
			response.end();
		})
	}
})


var http = require('http');
var fs = require('fs');
var server = http.serverCreate(function(req, resp){
	var url = req.url;

	if (url === '/'){
		fs.readFiel('index.html', function(err, data){
			resp.write(data.toString());
			resp.end();

		})
	}
})

var http = require('http');
var fs = require('fs');

var server = http.serverCreate(function(req, resp){
	var url.req.url;
	
})