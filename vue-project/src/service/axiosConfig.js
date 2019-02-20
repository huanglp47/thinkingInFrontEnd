import axios from 'axios';

//创建实例
const HTTP = axios.create({

  //如果配置了ApiUrl,就不会走proxy
  // baseURL: ApiUrl,

  headers: {
    Authorization: 'bearer '+localStorage.getItem('token')||''
  },

  timeout:8000,
  // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json',
  transformRequest: [function (data) {
    // Do whatever you want to transform the data
    return data;
  }],
  transformResponse: [function (data) {
    // Do whatever you want to transform the data
    return data;
  }],
  onUploadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },

  // `onDownloadProgress` allows handling of progress events for downloads
  onDownloadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  }
});
HTTP.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// `withCredentials` indicates whether or not cross-site Access-Control requests
// should be made using credentials
HTTP.defaults.withCredentials=true;

// 添加请求拦截器
HTTP.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log('【axios拦截器】发送请求');
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
HTTP.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log('【axios拦截器】请求已经返回'+JSON.stringify(response.data));
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
export default HTTP
