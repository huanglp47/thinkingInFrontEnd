// https://www.baidu.com/s
//?wd=js%20%20exec&rsv_spt=1&rsv_iqid=0xacafc4280000cd9f&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&rqlang=cn&tn=baiduhome_pg&rsv_enter=1&rsv_t=52b4GahU9Of3P%2F%2Bbyu2rbQBnJImsI%2BqsaYYfa2UxFzJdi3AgSdBoHNr2la8rG6rn%2Fm%2Bd&oq=exec&inputT=898&rsv_sug3=6&rsv_sug1=6&rsv_sug7=100&rsv_pq=b1352ddf00011d70&rsv_sug2=0&rsv_sug4=1723
function parseUrl(url){
	// var url = decodeURI(url);
	// var result = {}, reg = /([^?#&=]+)=([^&]+)/ig,match = null;
	// while(match=  reg.exec(url)!=null){
	// 	result[match[1]] = match[2]
	// }
	// return result
	var url = location.href
	var search =url.split('?')[1]
	var params = search.split('&')
	var arr=[],result = {};
	for (var i = 0; i < params.length; i++) {
		arr = params[i].split('=')
		if( !result[arr[0]]){
			result[arr[0]] = arr[1];
		}
	}
	return result

}


var a=  parseUrl(location.href)
console.log(a);

function isType(type){
	return function(obj){
		return Object.prototype.toString.call(obj) === '[object '+type+']'
	}
}

function isObject(obj){
	return isType('Object')(obj)
}

function getObjLength(obj){
	if(!isObject(obj)){
		return
	}
	if(Object.keys(obj)){
		return Object.keys(obj)
	}else{
		var arr = [];
		for(var i in obj){
			if(obj.hasOwnproperty(i)){
				arr.push(i)
			}
		}
		return arr.length
	}
}
var obj = {
	'aa': '122',
	'ss': '232334'
};
var aa = getObjLength(obj);
console.log(aa);


function indexOf(arr,ele){
	var indexOf = Array.prototype.indexOf
	if(indexOf){
		return indexOf.call(arr,ele)
	}
	for(var i=0,len=arr.length;i<len;i++){
		if(arr[i]==ele){
			return i
		}
	}
	return -1
}
var arr = ['1','2','3']
var aa = indexOf(arr, '2');
console.log(aa);

var str='qwee123'
str.split('').reverse().join('')


function charEllipsis(str,len){
	return str.substring(0, len)+'...'
}
var a = charEllipsis('qwewertrtytyi',5)
console.log(a)


//asdd => Asdd

function firstLetterToUuperCase(str){
	return str.substring(0,1).toUpperCase()+ str.substring(1)
}
var a = firstLetterToUuperCase('qwewertrtytyi')
console.log(a)


var str="他今年22岁，她今年20岁，他的爸爸今年45岁，她的爸爸今年44岁，一共有4人"  ;
var reg = /(\d+)岁/ig

var year = new Date().getFullYear()
var str1 = str.replace(reg, function(val){
	return val + "(" + (new Date().getFullYear()-parseInt(val))+"年出生)"
})
console.log(str)
console.log(str1)

var str='aaaadddddgfgggg23';
var key = 3;
str.replace(new RegExp(key,'g'),"b");