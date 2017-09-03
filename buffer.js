//var buf = new Buffer(10);
//var buf = new Buffer([10,20,30,50,50,60]);
//var buf = new Buffer('www.baidu.com',utf-8);
//写入缓冲区
//buf.write(string[,offset[,length]][,encoding])
var buf = new Buffer(256);
var len = buf.write('www.baidu.com');//保持缓冲写入的字节数
	console.log('写入的字节数：'+len);