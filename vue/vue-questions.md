# vue的一些问题收集

## 1.什么时候适合用methods，什么时候适合用compute，d什么时候适合用watch

## 2.各组件如何通信（父传子，子传父，同级组件）
vuex

$emit $on

### 2.1子调用父例子：

//父组件

![子调用父例子](https://github.com/huanglp47/thinkingInFontEnd/img/vue-father-component-1.png)

//子组件

![子调用父例子](https://github.com/huanglp47/thinkingInFontEnd/img/vue-child-component-1.png)

### 2.2 父组件调用子组件
//父组件

![父组件调用子组件](https://github.com/huanglp47/thinkingInFontEnd/img/vue-father-component-2.png)

//子组件

![父组件调用子组件](https://github.com/huanglp47/thinkingInFontEnd/img/vue-child-component-2.png)

### 2.3.子组件与子组件通信

![子组件与子组件通信](https://github.com/huanglp47/thinkingInFontEnd/img/vue-child-child-component.png)



## 3.公用方法mixin处理，全局状态该如何存储，如何自定义组件的指令

## 4.vue-cli脚手架了，vue是如何通过使用webpack进行测试和生产环境进行一个构建处理的
