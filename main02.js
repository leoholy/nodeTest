//非阻塞模式程序在读取文件的同时可以执行接下来的代码，极大的提高了性能。
var fs = require('fs');
	fs.readFile('/Users/leo/Documents/nodeTest/input.txt',function (err,data){
		if(err){ return console.log(err);};
		console.log(data.toString());
	});
	console.log("程序执行结束");