1.请用js去除字符串空格？
var str='  gfgfg  ';
str.replace(/(^\s*)|(\s*$)/ig, '')

jQuery：$.trim(str)


正则demo：
* 用户名正则，4到16位（字母，数字，下划线，减号）
var val='fgfgdf规范',val2='fgfgdf';
var reg=/^[a-zA-Z0-9_-]{4,16}$/ig;
reg.test(val)
reg.test(val2)

2.如何获取浏览器URL中查询字符串中的参数？


3.
var foo = {n:1};
var bar = foo;
foo.x = foo = {n:2};
/**

*个人总结这个题主要考了三个重点，一是引用赋值，二是js计算符的优先级，三是赋值表达式结合性

*var foo = {n:1};var bar = foo;所以这两行的结果是对象foo和bar存的都是同一个对象{n:1}的地址，关键在于第三行。由JS运算符的优先级可以看出对象的属性访问

*符'.'在这一行的优先级最高，所以foo.x最先计算，存下的是对{n:1}这个对象的X属性的引用。而由于JS赋值表达式是右结合，所以第三行就相当于是

*foo.x = ( foo = {n:2} ),也就是先进行foo = {n:2}这个赋值，所以此时的foo已经指向了{n:2}这个对象，再执行foo.x = foo,也就相当于给{n:1}这个对象的X属性赋值

*为{n:2},整个过程bar都指向的{n:1}这个对象，所以bar最终结果是{n:1,X:{n:2}},而foo为{n:2}。
**/

4.
var obj = {name: 'Coco'};
var str = '123' + obj;
console.log(str); //123[object Object]
////////////////////////
var arr = [1, 2];
var str = '123' + arr;
console.log(str); // 1231,2
////////////////////////
var obj = {
    valueOf: function() {
        console.log('调用 valueOf');
        return {};
    },
    toString: function() {
        console.log('调用 toString');
        return 10;
    }
}
console.log(obj + 1);
// 调用 valueOf
// 调用 toString
// 11

///////////////////////////////
test.valueOf = function() {
    console.log('调用 valueOf 方法');
    return {};
}
test.toString= function() {
    console.log('调用 toString 方法');
    return 3;
}
test;
// 输出如下：
// 调用 valueOf 方法
// 调用 toString 方法
// 3



引用类型转化为数字
1.优先调用valueOf方法（如果有），看其返回结果是否是原始类型，如果是，转化为数字，返回。
2.否则，调用toString方法（如果有），看其返回结果是否是原始类型，如果是，转化为数字，返回。
3.其他报错。


5.curry js
function add () {
    var args = [].slice.call(arguments);

    var fn = function () {
        var arg_fn = [].slice.call(arguments);
        return add.apply(null, args.concat(arg_fn));
    }
    //重写函数的 valueOf 方法或者 toString 方法
    fn.valueOf = function() {
        return args.reduce((a, b) => a + b);
    }
    return fn;
}
add(2)(7)(455)(5656)
add(1)

//检测空对象
Object.keys(obj).length === 0

//实现inserAfter
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}
//////////
var name = "The Window";
var object = {
    name: "My Object",
    getNameFunc: function() {
        console.log(this.name); //"My Object"
        return function() {
            return this.name; //"The Window"
        };
    }
};
alert(object.getNameFunc()());

///////////////////////////
//实现person.set(10).get() //20
function Person() {}
Person.prototype = {
    num: null,
    set: function(n) {
        this.num = n;
        return this
    },
    get: function() {
        return (this.num) * 2
    }
}
var person = new Person();
var a = person.set(10).get()
console.log(a);

///////////////////

//runAsync().then(function(){}).then(function(){})
function runAsync() {
    var p = new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("异步任务1执行完成");
            resolve("随便什么数据1");
        }, 3000)
    })
    return p
}
runAsync().then(function() {
    console.log("异步任务1执行结果");
})
////////////////
//字符串截取
(function aa(val, len, m) {
    var len = len || 30
    var m = m || '...';
    if (val.length >= len) {
        console.log(val.substr(0,len) + m)
        return val.substr(0,len) + m
    }else{
        return val
    }
})('sdsfdfdfdgfg', 10, '...')

//////////////////
//promise异步错误无法在catch中获取
const wait = function(){
    const promise = new Promise((resolve,reject)=>{
        console.log('创建promise对象')
        const task = function(){
            console.log('执行成功')
            resolve() // 同理，reject则走'err 1'
        }
        setTimeout(task, 2000)
    })
    return promise
}
wait().then(()=>{
    console.log('ok 1')
},()=>{
    console.log('err 1')
}).catch( err=> {
    console.log('err')
})
// 结果：
// 创建promise对象
// 执行成功
// ok 1

////////////////
//考察作用域和arguments
var length = 10;
function fn(){
    console.log(this.length)
}
var obj = {
    length:5,
    method: function(fn){
        console.log( this.length)
        fn();
        arguments[0]();
    }
}
obj.method(fn, '1')
//结果：
//5
//10
//2

////////////////
//截取银行卡卡号，每4位分离，最后剩1-3位不处理
//方法1
var str = '81002000008031';
var a = str.replace(/(\d{4})(?=\d)/g, "$1 ")
console.log(str);
console.log(a)
//81002000008031
//8100 2000 0080 31

// 方法2
var str = '8100200008888888888808031';
var arr = str.split("");
for (var i = 0, len = arr.length; i < len; i++) {
    if ((i+1) % 4 == 0) {
        arr[i] += " "
    }
}
var str2 = arr.join('');
console.log(str2);
// 8100 2000 0888 8888 8888 0803 1

