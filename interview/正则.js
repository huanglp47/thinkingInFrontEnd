//实现任意字符替换
//不支持string.replace(/key/g,"b");
var str='aaaadddddgfgggg23';
var key = 3;
str.replace(new RegExp(key,'g'),"b");

///////////////
function trim(val){
	return val.replace(/(^\s+)|(\s+$)/,'')
}
var a = trim('  qwewer trtytyi  ')
console.log(a)

//////////

var str="他今年22岁，她今年20岁，他的爸爸今年45岁，她的爸爸今年44岁，一共有4人"  ;
var reg = /(\d+)岁/ig

var year = new Date().getFullYear()
var str1 = str.replace(reg, function(val){
	return val + "(" + (new Date().getFullYear()-parseInt(val))+"年出生)"
})
console.log(str)
console.log(str1)

////exec
// re1.exec("要检索的字符串");

// https://www.baidu.com/s
//?wd=js%20%20exec&rsv_spt=1&rsv_iqid=0xacafc4280000cd9f&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&rqlang=cn&tn=baiduhome_pg&rsv_enter=1&rsv_t=52b4GahU9Of3P%2F%2Bbyu2rbQBnJImsI%2BqsaYYfa2UxFzJdi3AgSdBoHNr2la8rG6rn%2Fm%2Bd&oq=exec&inputT=898&rsv_sug3=6&rsv_sug1=6&rsv_sug7=100&rsv_pq=b1352ddf00011d70&rsv_sug2=0&rsv_sug4=1723
function parseUrl(url) {
	var url = decodeURI(url);
	var result = {}, reg = /([^?#&=]+)=([^&]+)/ig, match = null;
	while ( (match = reg.exec(url)) != null) {
		result[match[1]] = match[2]
	}
	return result
}
var a=  parseUrl(location.href)
console.log(a);


