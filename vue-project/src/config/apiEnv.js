let ApiUrl = 'http://localhost:8080';
const url = window.location;
const hostName = url.hostname;
//histaory模式下路由前缀
let ROUTER_BASE = '/admin'

if(hostName =='app.xx.com'){
  ApiUrl = 'https://app.xx.com'
}else if(hostName =='test.xx.com'){
  ApiUrl='http://test.xx.com'
}else if(hostName =='debug.xx.com'){
  ApiUrl='http://debug.xx.com'
} else if(hostName =='uat.mixcapp.com'){
  ApiUrl='http://uat.xx.com';
}else{
  ROUTER_BASE='';
}
console.log('当前环境:'+ApiUrl);

export {
  ApiUrl,
  ROUTER_BASE,
}
