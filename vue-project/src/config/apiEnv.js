let ApiUrl = 'http://localhost:8080';
const url = window.location;
const hostName = url.hostname;
//histaory模式下路由前缀
let ROUTER_BASE = '/mixcAdmin'

if(hostName =='app.mixcapp.com'){
  ApiUrl = 'https://app.mixcapp.com'
}else if(hostName =='test.mixcapp.com'){
  ApiUrl='http://test.mixcapp.com'
}else if(hostName =='debug.mixcapp.com'){
  ApiUrl='http://debug.mixcapp.com'
} else if(hostName =='uat.mixcapp.com'){
  ApiUrl='http://uat.mixcapp.com';
}else{
  ROUTER_BASE='';
}
console.log('当前环境:'+ApiUrl);

export {
  ApiUrl,
  ROUTER_BASE,
}
