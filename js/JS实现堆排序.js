/**
 * Created by huanglipeng1 on 2018/10/19.
 */
//快速
function quickSort1(arr){
    if(arr.length<=1){
        return arr
    }
    var left =[],right=[];
    var index = Math.floor(arr.length/2)
    var val = arr.splice(index, 1);

    for(var i=0,len=arr.length;i<len;i++){
        if(arr[i]<val){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return quickSort1(left).concat(val, quickSort1(right))
}
var a = quickSort1([1, 355, 676, 879, 45, 66, 45, 787]);
console.log(a);

//数组中查找。二分法
var target = 58;
var length = 1000;
var arr = Array.from(new Array(length)).map((item, index)=>index)
console.log(arr);
var num2=0;
function binarySearch2(arr, target, left,right){
    var index =  Math.floor((right+left)/2);
    var val = arr[index]
    if(val> target){ //
        ++num2
        binarySearch2(arr, target,left,index)
    }else if(val < target){
        ++num2
        binarySearch2(arr, target, index,right)
    }else{
        console.log(target+'的索引值是：'+index)
        console.log('搜索次数：'+num2)
    }
}
binarySearch2(arr, target,0 ,length)

//统计字符出现的个数
var str = 'sdfdgfhghgjhdgtdsgfhfh4r8ytu5u6tu599tu'
var arr = str.split('')

var newobj = arr.reduce(function(pre,current,index,array){
    pre[current] = pre[current]? ++pre[current]: 1
    return pre
},{})
console.log(newobj);

// 找出对象某个属性的最小值
var o=[{
    aa:2323,
    bb:23
},{
    aa:21323,
    bb:23
},{
    aa:222323,
    bb:23
},{
    aa:3,
    bb:23
}]
var arr =  o.map(function(item){
    return item.aa
})
var cc = Math.min.apply(Math, arr)
console.log(cc)

















