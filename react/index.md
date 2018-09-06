## React创建组件的三种方式及其区别

### 1. 无状态函数式组件
创建纯展示组件，只负责根据传入的props来展示，不涉及到要state状态的操作，是一个只带有一个render方法的组件类

```js
function HelloComponent(props) {
  return <div>Hello {props.name}</div>
}
ReactDOM.render(<HelloComponent name="yourName" />, mountNode)
```
#### 特点：
1.组件不会被实例化，整体渲染性能得到提升

2.组件不能访问this对象

3.组件无法访问生命周期的方法

4.无状态组件只能访问输入的props，同样的props会得到同样的渲染结果，不会有副作用

--------------------------
### 2. React.createClass

#### 特点：
1.React.createClass会自绑定函数方法导致不必要的性能开销

2.React.createClass的mixins不够自然、直观

-----------------------------
### calss XX extends  React.Component
React.Component是以ES6的形式来创建react的组件。相对于 React.createClass可以更好实现代码复用
```js
class Greeting extends React.Component{
}
```


### 关于this

React.createClass创建的组件，其每一个成员函数的this都有React自动绑定，任何时候使用，直接使用this.method即可，函数中的this会被正确设置

>React.Component创建的组件，其成员函数不会自动绑定this，需要手动绑定，否则this不能获取当前组件实例对象
>>1.
```js
 constructor(props) {
       super(props);
       this.Enter = this.Enter.bind(this);
  }
```
2.
```html
 <div onKeyUp={this.Enter.bind(this)}></div
```
3.
```html
<div onKeyUp={(event)=>this.Enter(event)}></div>
```

### Props和State的区别

1.父组件对子控件的props进行赋值，并且props的值不可改变。一个子控件自身不能改变自己的 props。

组件间的状态传递，由于React是单向数据流（自上而下）的，所以props从父组件传递给子组件。在组件之间通信用

2.state:组件内部的状态，只能通过setState来改变，用来更新组件内部的数据。当一个组件 mounts的时候，state如果设置有默认值的会被使用，并且state可能时刻的被改变


### Redux
Redux 是 JavaScript 状态容器，提供可预测化的状态管理



















