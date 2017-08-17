# 异步处理的几种方式
## 一.回调函数

## 二.发布 / 订阅者模式

![发布订阅](https://github.com/huanglp47/thinkingInFontEnd/blob/master/img/js_pulic_subscribe.png)

## 三.promise
```js
$.ajax("test.html")
    .done(function(){ alert("哈哈，成功了！"); })
    .fail(function(){ alert("出错啦！"); });
$.when($.ajax("test1.html"), $.ajax("test2.html"))
     .done(function(){ alert("哈哈，成功了！"); })
     .fail(function(){ alert("出错啦！"); });
function f1() {　　　　
    var dfd = $.Deferred();　　　　
    setTimeout(function() {　// f1的任务代码
       dfd.resolve();　　　　
    }, 500);　　　　
    return dfd.promise;
}
f1().then(f2).then(f3);

```
>  基本的 api
 1.	Promise.resolve()
 2.	Promise.reject()
 3.	Promise.prototype.then()
 4.	Promise.prototype.catch()
 5.	Promise.all() // 所有的完成

## 四.Generator(使用标志*/yield)(ES6)

![Generator1](https://github.com/huanglp47/thinkingInFontEnd/blob/master/img/js_generator_1.png)

![Generator2](https://github.com/huanglp47/thinkingInFontEnd/blob/master/img/js_generator_2.png)

## 五.async await(ES7)

![async_await1](https://github.com/huanglp47/thinkingInFontEnd/blob/master/img/js_async_await.png)

  await 命令后面的 Promise 对象，运行结果可能是 rejected，所以最好把 await 命令放在 try...catch 代码块中

![async_await2](https://github.com/huanglp47/thinkingInFontEnd/blob/master/img/js_async_await_2.png)
