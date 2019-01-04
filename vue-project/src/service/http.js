import HTTP from './axios_config'

export const getAjax = function(url, obj){

  // isNeedLoading && Toast.loading('请求中...', 10);
  return new Promise((resolve,reject)=>{
    HTTP.get(url, {params:obj}).then(res=>{
    // HTTP.get(url, JSON.stringify(obj)).then(res=>{
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
