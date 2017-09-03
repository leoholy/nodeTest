//nodejs事件循环
//引入事件
var events = require('events');
//创建eventEmitter对象
var eventEmitter = new events.EventEmitter();//可添加多个事件监听器
//绑定事件及事件的处理程序
var connectHandler = function connected(){
	console.log('连接成功');
	//触发data_received事件。
	eventEmitter.emit("data_recieved")
}
//绑定connection事件处理程序
eventEmitter.on('connection',connectHandler);
//使用匿名函数绑定data_recevied事件
eventEmitter.on('data_recevied', function (){
	console.log("数据接收成功");
})
//触发事件
eventEmitter.emit('connection');
console.log("程序执行完毕");