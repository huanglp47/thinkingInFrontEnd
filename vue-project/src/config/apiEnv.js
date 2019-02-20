//自动判断接口环境
let ApiUrl = 'http://localhost:8080';

const url = window.location;
const hostName = url.hostname;
//histaory模式下路由前缀
let ROUTER_BASE = '/mixcAdmin'
const port = url.port;

if(hostName =='app.aaa.com'){
  ApiUrl = 'https://app.aaa.com'
}else if(hostName =='uat.aaa.com'){
  ApiUrl='http://uat.aaa.com'
}else{
  ROUTER_BASE='/';
}
console.log('当前环境:'+ApiUrl);


export {
  ApiUrl,
  ROUTER_BASE,
}
