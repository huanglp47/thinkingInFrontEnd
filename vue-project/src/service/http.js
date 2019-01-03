import axios from 'axios';
import { ApiUrl } from '../config/apiEnv.js';

const HTTP = axios.create({
  baseURL: ApiUrl.api_name,
  timeout:8000,
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
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const getAjax = function(url, obj){

  // isNeedLoading && Toast.loading('请求中...', 10);
  return new Promise((resolve,reject)=>{
    HTTP.get(url, {params:obj}).then(res=>{
      if(res.data.code=='0'){
        resolve(res.data);
      }else if(res.data.code=='401') {
        //登录
      }else{
        reject(res);
      }
    })
  }).catch( (err)=>{
    reject(res);
  })
}

export const postAjax = function(url, obj){
  return new Promise((resolve, reject) => {
    HTTP.post(url, {params:obj}).then((res) => {
        if(res.data.code==0){
          resolve(res.data.data);
        }else {
          // Toast(res.data.message);
          reject(res);
        }
    }).catch((err) => {
      // Toast(err);
      reject(err);
    });
  })
}
