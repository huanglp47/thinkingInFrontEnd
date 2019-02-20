JS部分
1.	JS如何添加、移除、替换、插入，查找节点？

```
appendChild
removeChild
replaceChild

insertBefore

document.getElementsByTagName()
document.getElementsByClass()

document.getElementByTd()

document.querySeletor()
document.querySeletorAll()
```

2.	以下代码返回什么？为什么？
var a = new Object();
    a.value = 1;
    var b = a;
    b.value = 2;
alert(a.value);

```
//2，引用类型复制（浅拷贝），指针共享
```

3.	JS子类如何继承父类？

```
//ES6
class Parent{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	show(){
		console.log(`我叫:${this.name}， 今年${this.age}岁`);
	}
}
class Child extends Parent{}

var c = new Child('1112',20)
c.show()

//ES5
function Parent(name){
	this.name = name;
}
Parent.prototype = {
	eat: function(){
		console.log(this.name)
	}
}
function Child(name,age){
	Parent.call(this,name);
	this.age = age;
}
Child.prototype = new Parent(); //create(Child.prototype)
Child.prototype.constutor = Child;

function create(o){
	var F = function(){}
	F.prototype = o;
	return new F()
}

var c1 = new Child('123',55)
var c2 = new Child('123',55)
c1.eat()

```

4.	以下代码z是多少？

var z = 10;
    function aa() {
        console.log(z);
    }
    (function(a) {
        var z = 20
        a();
})(aa); //10

5.	补全代码，使下面代码点击li时分别输出对应下标
var lis = querySelectorAll('li')
for(var i=0;i<10;i++){
   lis[i].onclick = function() {
	//….
}
}
```
//方法1
var lis =document.querySelectorAll('li')
for(var i=0;i<lis.length;i++){
   lis[i].onClick = (function(i) {
		console.log(i)
	})(i)
}

//方法2
var lis =document.querySelectorAll('li')
for(var i=0;i<lis.length;i++){
   lis[i].onClick = doIt(i)
}
function doIt(i){
	console.log(i)
}

//方法3
var lis =document.querySelectorAll('li')
for(let i=0;i<lis.length;i++){
   lis[i].onClick = (function(){
    console.log(i)
   })()
}
```

6.	你平时用过vue或react等框架吗？请简单说说各生命周期函数（选一即可）
<img src="../img/vue-lifecycle.png"/>
-------------
<img src="../img/react-lifecycle.png"/>
7.	如何实现浏览器内多个标签页之间的通信?
```
1. localstorage  storage事件
2.cookie
3.postMessage (ie有兼容性)
```

CSS部分
1.	rem与em区别
```
rem 相对根元素
em: 相对父元素
```
2.	介绍一下CSS的盒子模型？
```
标准盒模型和IE盒模型
IE的content部分包含了 border 和 pading;
盒模型： 内容(content)、填充(padding)、边界(margin)、 边框(border).

box-sizing: border-box
```





