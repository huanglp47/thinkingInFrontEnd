1.
```
js怎么快速声明一个数组，长度为 100，元素全是 0？
1. new Array(100).fill(0)

2. Array.from({length:100}, _=>0)

3.var arr = Array.from(new Array(100))
  arr.map((item,index)=>0)
```
js怎么快速声明一个数组，长度为 100，元素全是1-100？
```
1.var arr = Array.from(new Array(100))
    arr.map((item,index)=>index+1)
2.循环赋值或者push
3.new Array(100).toString().split(',').map((items,index)=>index+1)
4. Array.from(new Array(100).keys())
```

js怎么快速声明一个数组，长度为 100，元素全是1-100,给出元素A（1-100整数）得出查找次数n？
```
var target = 58;
var length = 10000;
var arr = Array.from(new Array(length)).map((item, index)=>index)
// var low = 0;
// var high = arr[length-1];

// console.log(arr);
// var arr = [1,4,6,8,9,10,44,58,88,99,580,920,999] //需要排序
console.log(arr);
console.log( '理论查找次数'+Math.floor(Math.log2( arr.length)) )

var num = 1; //查找次数
function binarySearch(arr, target, leftIndex, rightIndex){
    var midIndex = Math.floor((leftIndex+rightIndex)/2);
    var value = arr[midIndex]; //中间值
    if(target>value){
        num++;
        binarySearch(arr, target, midIndex, rightIndex)
    }else if(target<value){
        num++;
        binarySearch(arr, target, leftIndex, midIndex)
    }else{
        console.log(target+'的下标志是：'+midIndex)
        console.log('查找次数为：'+num)
    }

}
binarySearch(arr,target, 0,  arr.length-1)
```

数组排序，快速排序
```
var arr = [1,4,66,8,9,510,44,58,883,96,580,20,999]
function quickSort(arr){
    if(arr.length<=1){
        return arr
    }
    var midIndex = Math.floor(arr.length/2);
    var baseEle = arr.splice(midIndex,1)
    var left=[],right=[];

    for (var i = 0; i < arr.length; i++) {
        if(arr[i]<baseEle){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

return quickSort(left).concat(baseEle, quickSort(right))
}
var aa = quickSort(arr)
console.log(aa);

```