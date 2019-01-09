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

