var http = require('http');
	http.createServer(function (req,res){
		//发送http头部
		//设置http状态；200 : ok
		//内容类型：text/plain 
		res.writeHead(200,{'conten-type':'text/plain'});
		//发送响应请求
		res.end('hello world\n');
	}).listen(8888);
	//终端打印
	console.log('Server running at http://127.0.0.1:8888/');