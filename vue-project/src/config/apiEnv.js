//自动判断接口环境
let ApiUrl = 'http://test.mixcapp.com';

const url = window.location;
const hostName = url.hostname;
const port = url.port;

if(hostName =='app.aaa.com'){
  ApiUrl = 'https://app.aaa.com'
}else if(hostName =='uat.aaa.com'){
  ApiUrl='http://uat.aaa.com'
}
console.log('当前环境:'+ApiUrl);
export {
  ApiUrl
}
