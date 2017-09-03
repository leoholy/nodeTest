//引入事件和创建eventEmitter对象
var  events = require('events');
var  eventEmitter = new events.EventEmitter();
//创建监听器#1 #2
var listener1 = function listener1(){
	console.log('listener1 执行');
}
var listener2 = function listener2(){
	console.log('listener2 执行');
}
//绑定connection事件,处理函数分别为listener1 listener2
	eventEmitter.addListener('connection',listener1);
	eventEmitter.addListener('connection',listener2);	
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
	console.log(eventListeners+'个监听器监听连接事件');
//处理connection事件
 	eventEmitter.emit('connection');
 //移除监听器
 	eventEmitter.removeListener('connection',listener1);
 	console.log("listener1已经移除了");
 //再次触发connection事件
 	eventEmitter.emit('connection');
 //再次输出eventEmitter存在多少的监听器
 var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
	console.log(eventListeners+'个监听器监听连接事件');
	console.log("程序执行完毕");