fetch
ie系列不支持，需要window.fetch polyfill (es6-promise)
```
向服务端发送请求几种方式, XMLHttpRequest(XHR)，Fetch ，jQuery实现的AJAX，axios

Fetch 请求默认是不带 cookie 的，需要设置 fetch(url, {credentials: 'include'})

服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，fetch 才会被 reject
```


```js
var data = new FormData()
data.append('file', input.files[0])
data.append('user', 'hubot')


var url = https://example.com/profile''
var data = {
	name:'111'
}
fetch(url,{
	method:'POST',
	body:JSON.stringify(data),
	headers: new Headers({
	    'Content-Type': 'application/json'
	})
}).then((res)=>{
	//res.json()
	if(res.status ==200){
	    //...
	}else if (){

	}else{}
}).then().catch((error)=>{
	console.error('Error:', error)
})

config：
credentials: 'include'
var myHeaders = new Headers();
myHeaders.append("Content-Type", "text/plain");


上传文件：
var formData = new FormData();
var filefield = document.querySelector('input[type="file"]')

formData.append('token','2222')
formData.append('avatar', filefield.file[0])

fetch(url,{
	method:'POST',
	body: formData,
})

```