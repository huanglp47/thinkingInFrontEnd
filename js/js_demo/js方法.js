// 数组去重的几种方法  

//Es6
//Array.from() 方法从一个类似数组或可迭代对象中创建一个新的数组实例
let arr=['asd','fgfh','dgfg','asd','fg','dfdf','fg','ghgh','fg']
function unique(arr){
    return Array.from(new Set(arr))
}
var a = unique(arr);
console.log(a);

//reduce, 传入{}作为第一个参数
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
var countedNames = names.reduce(function(allNames, name) {
    if (name in allNames) {
        allNames[name]++;
    } else {
        allNames[name] = 1;
    }
    return allNames;
}, {});
console.log(countedNames);

//1
var arr=['asd','fgfh','dgfg','asd','fg','dfdf','fg','ghgh','fg'], newArr=[], o={};
function deleteItem(array){
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(!o[element]){
            o[element]=1;
            newArr.push(element);
        }
    }
    return newArr
}
var a = deleteItem(arr);
console.log(a);

//统计个数  2
var arr=['asd','fgfh','dgfg','asd','fg','dfdf','fg','ghgh','fg'], newArr=[], o={};
function deleteItem(array){
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(!o[element]){
            o[element]=1;
            newArr.push(element);
        }else{
            o[element]++;
        }
    }
    return newArr
}
var a = deleteItem(arr);
console.log(a);
console.log(o);

//es5 filter indexof  3
var arr=['asd','fgfh','dgfg','asd','fg','dfdf','fg','ghgh','fg'];
var a = arr.filter(function(item,index,array){
    return array.indexOf(item) === index;
});
console.log(a);


//双循环  4
var arr=['asd','fgfh','dgfg','asd','fg','dfdf','fg','ghgh','fg'];
function deleteItem(array){
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        for (let j = 0; j < array.length; j++) {
           const element1 = array[j];
            if(element == element1){
                arr.splice(j,1)
            }
       }
    }
    return newArr
}
var a = deleteItem(arr);
console.log(a);

//indexof  5
var array=['asd','fgfh','dgfg','asd','fg','dfdf','fg','ghgh','fg'];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
   if(array.indexOf(element)!=i){
    array.splice(i,1);
        i--;
   }
}
console.log(a);

//将'dfgfgfg345fgfgfg',转化为'dfgfgfg[3][4][5]fgfgfg'