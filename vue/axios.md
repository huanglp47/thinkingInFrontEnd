### axios拦截器
```
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
```
```
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
```
移除拦截器：
```
var myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```

自定义 axios 实例添加拦截器
```
var instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});
```

### 终止请求
jQuery ：xhr.abort()

```
//为4时代表请求完成了
  if(xmlHttp.readyState!=4){
    alert('数据响应超时');
    //关闭请求
    xmlHttp.close();
  }
```

在axios中是通过axios.CancelToken.source()方法取消请求