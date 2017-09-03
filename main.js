//阻塞代码实例
var fs = require('fs');
var data = fs.readFileSync('/Users/leo/Documents/nodeTest/input.txt');//读取的路径为绝对路径
console.log(data.toString());
console.log('程序执行结束');