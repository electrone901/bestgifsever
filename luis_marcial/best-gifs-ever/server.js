  // Within your server.js file, require in the http module
// To test your app, run your server.js file and open up 'localhost:3000' (or whatever port number you set your server to listen to) in your browser

var http = require('http'); 
var fs = require('fs'); 

var server = http.createServer(function(request, response){

var url = request.url;


	//get url & create if/else  for differernt urls
	if (url === '/'){	
		fs.readFile('index.html', function(err, data) {
            response.write(data.toString());
            response.end();
   		});
	}

	else if(url === '/page-2') {
		fs.readFile('page-2.html', function(err, data) {
            response.write(data.toString());
            response.end();
        });
	}

	else if(url === '/page-3') {
		fs.readFile('page-3.html', function(err, data) {
            response.write(data.toString());
            response.end();
        });

	} 

	else if(url === '/main.css') {
		fs.readFile('main.css', function(err, data) {
            response.write(data);//css no toString
            response.end();
        });
	}

	else if(url === '/p.png'){
		var img = fs.readFile('/p.png', function(err, data){
			response.writeHead(200, {'Content-Type': 'image/MIME' });
            response.end(img, 'binary');
		});
	}

	else {
		response.write('<h1>404</h1><br><p>Page not found</p>');
        response.end();
	}

});
console.log('server is running!')

server.listen(3000);
  



  //require fs
	//read file
	//write data from our index to our page
	// if  html has link/scripts  we need to also served them too

	
 